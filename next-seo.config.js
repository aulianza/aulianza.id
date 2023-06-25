const defaultSEOConfig = {
  defaultTitle: 'Ryan Aulia - Personal Website',
  description:
    'Experienced Software Engineer, specializing in frontend development.',
  canonical: 'https://aulianza.id',
  openGraph: {
    canonical: 'https://aulianza.id',
    title: 'Ryan Aulia - Personal Website',
    description:
      'Experienced Software Engineer, specializing in frontend development',
    type: 'website',
    images: [
      {
        url: 'https://aulianza.s3.ap-southeast-1.amazonaws.com/images/public/aulianza-next-tailwind-starter.png',
        alt: 'aulianza.id og-image',
        width: 800,
        height: 600,
      },
    ],
    site_name: 'aulianza.id',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
