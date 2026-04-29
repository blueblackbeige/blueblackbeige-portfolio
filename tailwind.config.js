/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Core brand pillars ──────────────────────────────────────────────
        beige: {
          DEFAULT: "#E8DCC4",
          light:   "#F2EADB",
          dark:    "#8B7349",
          paper:   "#F5EFE2",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          soft:    "#1A1A1A",
          mid:     "#2D2D2D",
          muted:   "#5A5A5A",
        },
        electric: {
          DEFAULT: "#2952CC",
          deep:    "#1E3A8A",
          bright:  "#3B6FE8",
          dark:    "#142654",
        },

        // ── Cool & minimal accent palette ───────────────────────────────────
        // Slate — cool blue-grey, used for secondary borders, meta text, tags
        slate: {
          DEFAULT: "#64748B",
          light:   "#94A3B8",
          dark:    "#475569",
          xdark:   "#334155",
          subtle:  "#F1F5F9",
        },
        // Sage — muted green-grey, used for status indicators, chips, hovers
        sage: {
          DEFAULT: "#7C9A84",
          light:   "#A8C4AF",
          dark:    "#556B5C",
          subtle:  "#EEF4EF",
        },
        // Stone — warm grey, used for dividers, backgrounds, inactive states
        stone: {
          DEFAULT: "#A8A29E",
          light:   "#D6D3D1",
          dark:    "#78716C",
          subtle:  "#F5F5F4",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans:  ["var(--font-sans)", "system-ui", "sans-serif"],
        mono:  ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
