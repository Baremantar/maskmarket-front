/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_PUBLIC_URL: process.env.NEXT_PUBLIC_PUBLIC_URL ?? 'http://localhost:3001/',
    // @ts-ignore
    DB_HOST: process.env.DB_HOST,
    // @ts-ignore
    DB_PORT: process.env.DB_PORT,
    // @ts-ignore
    DB_USER: process.env.DB_USER,
    // @ts-ignore
    DB_PASSWORD: process.env.DB_PASSWORD,
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
