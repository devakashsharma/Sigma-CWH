/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static0.gamerantimages.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
