/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_PUBLIC_URL: process.env.NEXT_PUBLIC_PUBLIC_URL ?? 'http://localhost:3001/'
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
