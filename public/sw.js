if (!self.define) {
  let e,
    a = {};
  const i = (i, s) => (
    (i = new URL(i + '.js', s).href),
    a[i] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = a), document.head.appendChild(e);
        } else (e = i), importScripts(i), a();
      }).then(() => {
        let e = a[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, n) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (a[c]) return;
    let r = {};
    const f = (e) => i(e, c),
      d = { module: { uri: c }, exports: r, require: f };
    a[c] = Promise.all(s.map((e) => d[e] || f(e))).then((e) => (n(...e), r));
  };
}
define(['./workbox-50de5c5d'], function (e) {
  'use strict';
  importScripts('fallback-lz4jabtlLX4Y5nw2hWL8g.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/chunks/1bfc9850-3f130fd0ac1fce5d.js',
          revision: '3f130fd0ac1fce5d',
        },
        {
          url: '/_next/static/chunks/645-e77bfa12709f6426.js',
          revision: 'e77bfa12709f6426',
        },
        {
          url: '/_next/static/chunks/734-50194c9d8bf3d53b.js',
          revision: '50194c9d8bf3d53b',
        },
        {
          url: '/_next/static/chunks/740-580cd7424c04cc4e.js',
          revision: '580cd7424c04cc4e',
        },
        {
          url: '/_next/static/chunks/746.f8a3e94fe584ee7c.js',
          revision: 'f8a3e94fe584ee7c',
        },
        {
          url: '/_next/static/chunks/75fc9c18-25984afe689afff4.js',
          revision: '25984afe689afff4',
        },
        {
          url: '/_next/static/chunks/840-74fc98b481b09600.js',
          revision: '74fc98b481b09600',
        },
        {
          url: '/_next/static/chunks/893-7c9adbc063644eb0.js',
          revision: '7c9adbc063644eb0',
        },
        {
          url: '/_next/static/chunks/98ea7ec2-dc8ace3c6d49120e.js',
          revision: 'dc8ace3c6d49120e',
        },
        {
          url: '/_next/static/chunks/d0447323-14d7d0fb705aed1f.js',
          revision: '14d7d0fb705aed1f',
        },
        {
          url: '/_next/static/chunks/d0c16330-5ba7f2fa3af05565.js',
          revision: '5ba7f2fa3af05565',
        },
        {
          url: '/_next/static/chunks/framework-2c79e2a64abdb08b.js',
          revision: '2c79e2a64abdb08b',
        },
        {
          url: '/_next/static/chunks/main-1a6469f1ab7519ea.js',
          revision: '1a6469f1ab7519ea',
        },
        {
          url: '/_next/static/chunks/pages/404-cca036ca6b5c1083.js',
          revision: 'cca036ca6b5c1083',
        },
        {
          url: '/_next/static/chunks/pages/_app-54c969628a41f4a1.js',
          revision: '54c969628a41f4a1',
        },
        {
          url: '/_next/static/chunks/pages/_error-54de1933a164a1ff.js',
          revision: '54de1933a164a1ff',
        },
        {
          url: '/_next/static/chunks/pages/_offline-8da88bad12807118.js',
          revision: '8da88bad12807118',
        },
        {
          url: '/_next/static/chunks/pages/about-f83c1ff8e12cd3db.js',
          revision: 'f83c1ff8e12cd3db',
        },
        {
          url: '/_next/static/chunks/pages/blog-809e15059dcadeca.js',
          revision: '809e15059dcadeca',
        },
        {
          url: '/_next/static/chunks/pages/blog/%5Bslug%5D-10e111ceaf46eac2.js',
          revision: '10e111ceaf46eac2',
        },
        {
          url: '/_next/static/chunks/pages/contact-b6da90d87d9ebcd4.js',
          revision: 'b6da90d87d9ebcd4',
        },
        {
          url: '/_next/static/chunks/pages/dashboard-2a11fa4b007ae2bc.js',
          revision: '2a11fa4b007ae2bc',
        },
        {
          url: '/_next/static/chunks/pages/index-c11f62772d0ed9f6.js',
          revision: 'c11f62772d0ed9f6',
        },
        {
          url: '/_next/static/chunks/pages/projects-d54bd75c10e95f65.js',
          revision: 'd54bd75c10e95f65',
        },
        {
          url: '/_next/static/chunks/pages/projects/%5Bslug%5D-ed652edee47a3db9.js',
          revision: 'ed652edee47a3db9',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-777f28a99c04e41c.js',
          revision: '777f28a99c04e41c',
        },
        {
          url: '/_next/static/css/36840340f3f01bb9.css',
          revision: '36840340f3f01bb9',
        },
        {
          url: '/_next/static/css/914d1c4d28500f56.css',
          revision: '914d1c4d28500f56',
        },
        {
          url: '/_next/static/css/aa94488fb30f8d6e.css',
          revision: 'aa94488fb30f8d6e',
        },
        {
          url: '/_next/static/lz4jabtlLX4Y5nw2hWL8g/_buildManifest.js',
          revision: 'b9e668c40ecfa89f92aecd12f87f82b3',
        },
        {
          url: '/_next/static/lz4jabtlLX4Y5nw2hWL8g/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/media/02b0fb833c223124-s.woff2',
          revision: '68d72be2df8bab189e695d3a2c32ffc0',
        },
        {
          url: '/_next/static/media/034043092db1e233-s.woff2',
          revision: '985e9b4713be3b0c3210a2f4a316492d',
        },
        {
          url: '/_next/static/media/2b3f1035ed87a788-s.p.woff2',
          revision: '03e877e75c5a1213e13a56b59471c946',
        },
        {
          url: '/_next/static/media/2e1f49a845c12876-s.woff2',
          revision: '6f932ccbad02f6d5d645e98173ef7bc8',
        },
        {
          url: '/_next/static/media/3b49a01c1c3dbb5c-s.woff2',
          revision: 'd0564b8c25f78830d77d16bf83812d36',
        },
        {
          url: '/_next/static/media/42363274585c0409-s.woff2',
          revision: 'a1edef6a3e0198a1863ba4ee45491e78',
        },
        {
          url: '/_next/static/media/49b4b4779109cbcf-s.woff2',
          revision: 'ba806c880d866542315550b53bf385d4',
        },
        {
          url: '/_next/static/media/65053818c3abcf97-s.woff2',
          revision: '9b02c436a26a8afe2e94314fdaa6d6bd',
        },
        {
          url: '/_next/static/media/73f2d88eef2a3cb1-s.p.woff2',
          revision: '78e3d763326adba0cb1011f40b22bbdb',
        },
        {
          url: '/_next/static/media/92a5a3c800bccb94-s.woff2',
          revision: 'ac3834f115a9a30ddccd43a6b824f734',
        },
        {
          url: '/_next/static/media/9c6817ab9c992ff9-s.p.woff2',
          revision: '6d3869db27574ef29645b9c6acd8968e',
        },
        {
          url: '/_next/static/media/eed6db14ac3b93a0-s.woff2',
          revision: 'bf5e9d3da99a28e7391571987186e6ea',
        },
        { url: '/_offline', revision: 'lz4jabtlLX4Y5nw2hWL8g' },
        { url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
        {
          url: '/favicon/android-icon-144x144.png',
          revision: '4a757e30bd54e924f8c97b1b5f444ad8',
        },
        {
          url: '/favicon/android-icon-192x192.png',
          revision: 'f41d8713ca30338b129207292f6d8114',
        },
        {
          url: '/favicon/android-icon-36x36.png',
          revision: 'daa9c91403d70be7ed934d7e3abe4eb6',
        },
        {
          url: '/favicon/android-icon-48x48.png',
          revision: 'eeb3c399505674a3576afe7f7546d263',
        },
        {
          url: '/favicon/android-icon-72x72.png',
          revision: 'b9893492ed7660411caa0aeb98018ab4',
        },
        {
          url: '/favicon/android-icon-96x96.png',
          revision: '0c83e0cc607f22266e8974c4f7f2bcd6',
        },
        {
          url: '/favicon/apple-icon-114x114.png',
          revision: 'b4f9745d95a69800a31f33c8de1f60e9',
        },
        {
          url: '/favicon/apple-icon-120x120.png',
          revision: '1b124501e2de57675ba18660c22ab27e',
        },
        {
          url: '/favicon/apple-icon-144x144.png',
          revision: '4a757e30bd54e924f8c97b1b5f444ad8',
        },
        {
          url: '/favicon/apple-icon-152x152.png',
          revision: '2afb3d7054bcfcb9a207923873270470',
        },
        {
          url: '/favicon/apple-icon-180x180.png',
          revision: '92d5283b12e5681b9f987587bc27ef74',
        },
        {
          url: '/favicon/apple-icon-57x57.png',
          revision: '0e497962d6f71b87184b8fad8c495343',
        },
        {
          url: '/favicon/apple-icon-60x60.png',
          revision: 'e2fb2b6488606e870594d49fb95f38a8',
        },
        {
          url: '/favicon/apple-icon-72x72.png',
          revision: 'b9893492ed7660411caa0aeb98018ab4',
        },
        {
          url: '/favicon/apple-icon-76x76.png',
          revision: '4e1586847f04d6d7cb23f25d04c59fd9',
        },
        {
          url: '/favicon/apple-icon-precomposed.png',
          revision: 'a79f0588012ae534d0673fa03e177e65',
        },
        {
          url: '/favicon/apple-icon.png',
          revision: 'a79f0588012ae534d0673fa03e177e65',
        },
        {
          url: '/favicon/browserconfig.xml',
          revision: '653d077300a12f09a69caeea7a8947f8',
        },
        {
          url: '/favicon/favicon-16x16.png',
          revision: '1da5dfd4ca634df1062cacaa741d5b17',
        },
        {
          url: '/favicon/favicon-32x32.png',
          revision: 'fc4631329f7b368dc8b5987f10110fb5',
        },
        {
          url: '/favicon/favicon-96x96.png',
          revision: '0c83e0cc607f22266e8974c4f7f2bcd6',
        },
        {
          url: '/favicon/favicon.ico',
          revision: 'e2358a6e96ad9368d95c36068917869d',
        },
        {
          url: '/favicon/manifest.json',
          revision: '2cb1641030856b343a54a7b78ade9295',
        },
        {
          url: '/favicon/ms-icon-144x144.png',
          revision: '4a757e30bd54e924f8c97b1b5f444ad8',
        },
        {
          url: '/favicon/ms-icon-150x150.png',
          revision: 'bed2bf3ba9d303af7050b27293ad3ca2',
        },
        {
          url: '/favicon/ms-icon-310x310.png',
          revision: 'ed8ae4188e39e87cb1328765404f37ae',
        },
        {
          url: '/favicon/ms-icon-70x70.png',
          revision: '70c8100775746f365d4c287b57a8100a',
        },
        {
          url: '/images/aulianza.png',
          revision: '74fe600e8ab276a90d2a227f9c133363',
        },
        {
          url: '/images/background.svg',
          revision: '45a2d69a819fe2d58a15c95a567f79f9',
        },
        { url: '/images/bg.png', revision: 'fc37dff8164b4f3b38104cb156076d05' },
        {
          url: '/images/careers/flexcode.png',
          revision: '49e795e3be5b7e193feb7ca1f8e19f17',
        },
        {
          url: '/images/careers/kpn.png',
          revision: '856791e206d3c4018478e98b3545ed7d',
        },
        {
          url: '/images/careers/paper-id.png',
          revision: '1ee78b3b93efe1e591c99bfafe4b3746',
        },
        {
          url: '/images/careers/rencong.png',
          revision: 'f44bbe337a66fc923dcba588bffc32fc',
        },
        {
          url: '/images/careers/sirka.png',
          revision: '06d5b1fed78b0c15216fd8f94b0371f3',
        },
        {
          url: '/images/clients/areakampus.png',
          revision: 'e1e20f129899cf7e9f91a21f66c2a39f',
        },
        {
          url: '/images/clients/daneen.png',
          revision: '3ee2b22ed656e34c549a91cf83aa0b53',
        },
        {
          url: '/images/clients/fixature.png',
          revision: '19ee310fa3be16fef6f15ccf43c34464',
        },
        {
          url: '/images/clients/mitech.png',
          revision: '8e53ccb225186a8eca2a9249b8614fa6',
        },
        {
          url: '/images/clients/negeriantara.png',
          revision: '08972777d923748f38c56c4d4df8d5d9',
        },
        {
          url: '/images/clients/phe.png',
          revision: '85c3f3f5590301e6f05935b15d13c214',
        },
        {
          url: '/images/clients/sirka.png',
          revision: '7001b843b42cb19aeb5b900cdb6f0d05',
        },
        {
          url: '/images/clients/telkom.png',
          revision: '777b875d01a43d204e0c9b2646f01067',
        },
        {
          url: '/images/clients/travelkuala.png',
          revision: '1c190e4e0c6befbc107ff9332204de33',
        },
        {
          url: '/images/clients/unsyiah.png',
          revision: '479f7812d144885ca4343562221e3a4f',
        },
        {
          url: '/images/icons/icon-128x128.png',
          revision: 'b9128b3713533ba41bfa18b713885b35',
        },
        {
          url: '/images/icons/icon-144x144.png',
          revision: '8ac57d14fe7a7656808bbaca0cc9ee8c',
        },
        {
          url: '/images/icons/icon-152x152.png',
          revision: 'd41d8cd98f00b204e9800998ecf8427e',
        },
        {
          url: '/images/icons/icon-192x192.png',
          revision: '9ec5ea0a0b5c487132173572373b94c6',
        },
        {
          url: '/images/icons/icon-384x384.png',
          revision: '970f92c937fc17a0e4e4b6952e34e3cf',
        },
        {
          url: '/images/icons/icon-512x512.png',
          revision: '48b40a2c0b18e6b960662b4144c8c738',
        },
        {
          url: '/images/icons/icon-72x72.png',
          revision: '42df59cbb6fc915eaf9015721fbefe20',
        },
        {
          url: '/images/icons/icon-96x96.png',
          revision: 'eb4f8f7289d925fedd058561bf6dbf4d',
        },
        {
          url: '/images/placeholder.png',
          revision: '2d70f8d538d96ccc87d2d581bf45f55d',
        },
        { url: '/manifest.json', revision: '4cc8eaa9f0144089ddfc51e6af5b45bf' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/robots.txt', revision: '44904106523951861d900dfa55dba4d3' },
        { url: '/sitemap-0.xml', revision: '985088fea85433824d12504e4463e0cd' },
        { url: '/sitemap.xml', revision: 'eceef9b580858dc08084fd2a5f81bac7' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: i,
              state: s,
            }) =>
              a && 'opaqueredirect' === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: a.headers,
                  })
                : a,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith('/api/auth/') && !!a.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    );
});
