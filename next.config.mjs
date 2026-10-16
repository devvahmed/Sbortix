/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 80, 90, 95],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sbortix.com',
          },
        ],
        destination: 'https://www.sbortix.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
