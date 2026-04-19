/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/google-search-console',
        destination: '/seo-services',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
