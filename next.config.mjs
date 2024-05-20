import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  /**
   * a development mode only feature for highlighting potential problems in an application.
   */
  reactStrictMode: true,
  /**
   * Next.js' swc compiler is used for minification by default since v13.
   * This is 7x faster than Terser.
   * If Terser is still needed for any reason this can be configured. next.config.js.
   * { swcMinify: false, }
   */
  swcMinify: true,
  eslint: {
    /**
     * Warning: This allows production builds to successfully complete even if your project has ESLint errors.
     */
    ignoreDuringBuilds: true,
  },
  typescript: {
    /**
     * Dangerously allow production builds to successfully complete even if your project has type errors.
     */
    ignoreBuildErrors: true,
  },
});

export default nextConfig;
