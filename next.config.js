/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Disable persistent caching in development to avoid ENOENT errors
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  images: {
    unoptimized: true
  }
}

export default withPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  disable: false,
})(withNextIntl(nextConfig));