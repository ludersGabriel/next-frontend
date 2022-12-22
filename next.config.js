/** @type {import('next').NextConfig} */
const withPwa = require('next-pwa')({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = withPwa(nextConfig)
