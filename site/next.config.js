/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Sam\'s Labs',
    description: 'The official store for Sam\'s Labs supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://RandomShits-hits.github.io/Kasm-registry/',
    contactUrl: 'https://RandomShits-hits.github.io/Kasm-registry/support',
  },
  reactStrictMode: true,
  basePath: '/Kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
