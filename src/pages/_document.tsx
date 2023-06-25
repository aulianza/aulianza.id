import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='application-name' content='aulianza.id' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='aulianza.id' />
        <meta name='description' content='Ryan Aulia - Personal Website' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#121212' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#121212' />

        <link rel='apple-touch-icon' href='images/icons/icon-72x72.png' />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='images/icons/icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='192x192'
          href='images/icons/icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='72x72'
          href='images/icons/icon-72x72.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='152x152'
          href='images/icons/icon-152x152.png'
        />

        <script
          async
          defer
          src='https://umami.aulianza.id/script.js'
          data-website-id='5a78190a-bdad-48a4-901a-c7400be41ca6'
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
