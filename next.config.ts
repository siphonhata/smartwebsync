import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    // Ignore handlebars which uses require.extensions (not supported by webpack)
    config.module.rules.push({
      test: /handlebars\.js$/,
      use: 'null-loader',
    });

    return config;
  },
};

export default nextConfig;
