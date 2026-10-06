/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "www.blueblackbeige.in" }],
      destination: "https://blueblackbeige.in/:path*",
      permanent: true,
    }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
