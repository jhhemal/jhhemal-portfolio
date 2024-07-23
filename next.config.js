/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'user-agent',
            value: '(curl|wget)', // Regex to match curl or wget
          },
        ],
        destination: '/middleware',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
