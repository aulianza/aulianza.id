const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'aulianza.s3.ap-southeast-1.amazonaws.com',
      'aulianza.id',
      'aulianza.com',
      'dev-to-uploads.s3.amazonaws.com',
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'blog-api.aulianza.id',
      'dev-assets.thijmen.dev',
    ],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
