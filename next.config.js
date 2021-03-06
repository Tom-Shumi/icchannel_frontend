/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  publicRuntimeConfig: {
      NEXT_PUBLIC_API_SERVER: process.env.NEXT_PUBLIC_API_SERVER,
  },
  exportPathMap: function(){
      return {
          '/': { page: '/' }
      }
  },
  future: {webpack5: true},
  images: {
    domains: ['hbb.afl.rakuten.co.jp', 'www11.a8.net', 'www14.a8.net', 'www22.a8.net', 'www12.a8.net', 'www29.a8.net',
              'www10.a8.net', 'www17.a8.net'],
  },
}