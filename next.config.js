/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // 静的エクスポート設定
  output: 'export',
  distDir: 'docs',
  // GitHub Pagesの設定
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
}

module.exports = nextConfig 