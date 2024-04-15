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
};

module.exports = nextConfig;
