/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_PUBLIC_URL: process.env.NEXT_PUBLIC_PUBLIC_URL ?? 'http://localhost:3001/'
  },
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })
    return config
  }
}

module.exports = nextConfig
