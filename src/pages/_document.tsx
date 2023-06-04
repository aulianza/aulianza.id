import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
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
