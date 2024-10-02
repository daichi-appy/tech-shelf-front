/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js

nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumbnail.image.rakuten.co.jp', // 表示したい外部画像のドメイン
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: config => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

module.exports = nextConfig