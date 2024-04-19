/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ];
  },
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
