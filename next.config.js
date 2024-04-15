/** @type {import('next').NextConfig} */
/*const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};*/

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
