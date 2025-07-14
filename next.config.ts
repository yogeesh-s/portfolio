import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
};

export default nextConfig;
