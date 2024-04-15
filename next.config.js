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
};

module.exports = nextConfig;

module.exports = {
  exportPathMap: async function () {
    return {
      '/': { page: '/about' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
    };
  },
};