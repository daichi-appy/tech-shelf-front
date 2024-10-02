/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js

module.exports = {
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
};

