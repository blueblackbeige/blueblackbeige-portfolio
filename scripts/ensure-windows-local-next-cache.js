const { spawnSync } = require("node:child_process");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

if (process.platform !== "win32" || !process.env.LOCALAPPDATA) {
  process.exit(0);
}

const projectRoot = path.resolve(__dirname, "..");
const oneDriveRoot =
  process.env.OneDrive ||
  process.env.OneDriveConsumer ||
  process.env.OneDriveCommercial;
const relativeToOneDrive = oneDriveRoot
  ? path.relative(oneDriveRoot, projectRoot)
  : "";
const isInOneDrive = oneDriveRoot
  ? relativeToOneDrive !== ".." &&
    !relativeToOneDrive.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(relativeToOneDrive)
  : /(?:^|[\\/])OneDrive(?:[\\/]|$)/i.test(projectRoot);

if (!isInOneDrive) {
  process.exit(0);
}

const localRoot = path.join(
  process.env.LOCALAPPDATA,
  "BlueBlackBeige"
);
const localBuild = path.join(
  localRoot,
  "next-cache",
  "blueblackbeige-portfolio"
);
const localModules = path.join(localRoot, "node_modules");
const packageJsonPath = path.join(projectRoot, "package.json");
const lockfilePath = path.join(projectRoot, "package-lock.json");
const localPackageJsonPath = path.join(localRoot, "package.json");
const localLockfilePath = path.join(localRoot, "package-lock.json");
const installMarkerPath = path.join(localRoot, ".dependencies-sha256");

function isPathAt(target, expected) {
  try {
    const stat = fs.lstatSync(target);
    if (!stat.isSymbolicLink()) return false;
    const current = path.resolve(path.dirname(target), fs.readlinkSync(target));
    return current.toLowerCase() === path.resolve(expected).toLowerCase();
  } catch {
    return false;
  }
}

function ensureJunction(linkPath, targetPath) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.mkdirSync(targetPath, { recursive: true });

  if (isPathAt(linkPath, targetPath)) return;

  try {
    fs.rmSync(linkPath, { recursive: true, force: true });
  } catch (error) {
    throw new Error(
      `Could not replace ${linkPath}. Stop any running Next.js server and try again. ${error.message}`
    );
  }

  fs.symlinkSync(targetPath, linkPath, "junction");
}

function installLocalDependencies() {
  const packageJson = fs.readFileSync(packageJsonPath);
  const lockfile = fs.readFileSync(lockfilePath);
  const fingerprint = crypto
    .createHash("sha256")
    .update(packageJson)
    .update(lockfile)
    .digest("hex");
  const localReactRuntime = path.join(localModules, "react", "jsx-runtime.js");
  const localNextPackage = path.join(localModules, "next", "package.json");
  const hasDependencies =
    fs.existsSync(localReactRuntime) && fs.existsSync(localNextPackage);
  const markerMatches =
    fs.existsSync(installMarkerPath) &&
    fs.readFileSync(installMarkerPath, "utf8").trim() === fingerprint;

  if (hasDependencies && markerMatches) return;

  fs.mkdirSync(localRoot, { recursive: true });
  fs.writeFileSync(localPackageJsonPath, packageJson);
  fs.writeFileSync(localLockfilePath, lockfile);

  const npmCli = process.env.npm_execpath;
  const result = npmCli
    ? spawnSync(
        process.execPath,
        [npmCli, "ci", "--prefix", localRoot, "--no-audit", "--no-fund"],
        { stdio: "inherit" }
      )
    : spawnSync(
        "npm",
        ["ci", "--prefix", localRoot, "--no-audit", "--no-fund"],
        { stdio: "inherit", shell: true }
      );

  if (result.error || result.status !== 0) {
    throw new Error(
      `Could not install the local Next.js dependencies. ${result.error?.message || `npm ci exited with ${result.status}`}`
    );
  }

  fs.writeFileSync(installMarkerPath, `${fingerprint}\n`);
}

try {
  installLocalDependencies();
  ensureJunction(path.join(projectRoot, "node_modules"), localModules);
  ensureJunction(path.join(projectRoot, ".next"), localBuild);
} catch (error) {
  console.error(`[OneDrive Next.js cache] ${error.message}`);
  process.exit(1);
}
