/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ["cdn.sanity.io", "lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
  // Add these settings to help with the build error
  output: 'standalone',
  experimental: {
      // This can help with memory optimization during build
      webpackMemoryOptimizations: true,
      // This can help with client component processing
      serverComponentsExternalPackages: [],
  },
  // This can help with route handling
  poweredByHeader: false,
};

export default nextConfig;