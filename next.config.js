const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'aulianza.s3.ap-southeast-1.amazonaws.com',
      'aulianza.id',
      'aulianza.com',
      'dev-to-uploads.s3.amazonaws.com',
      'res.cloudinary.com',
    ],
  },
  env: {
    COMMENTS_REPO: 'aulianza/aulianza.id',
    COMMENTS_REPO_ID: 'R_kgDOJoIhfQ',
    COMMENTS_CATEGORY: 'General',
    COMMENT_CATEGORY_ID: 'DIC_kwDOJoIhfc4CW6cJ',
  },
};

module.exports = nextConfig;
