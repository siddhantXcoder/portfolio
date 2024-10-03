/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['aceternity.com', 'images.unsplash.com', "/linear.webp"], // Add the domain here
      },
      eslint: {
        ignoreDuringBuilds: true,  // This disables ESLint during production builds
      },
};

export default nextConfig;
