/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // You might have other configurations here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '', // Leave empty unless it uses a specific port
        pathname: '/**', // Allows all paths on picsum.photos
      },
      {
        protocol: 'https',
        hostname: 'lucas-digital-market-dev.nysm.work',
        port: '',
        pathname: '/api/file-upload/**', // Adjust pathname if needed
      },
    ],
  },
};

export default nextConfig;
