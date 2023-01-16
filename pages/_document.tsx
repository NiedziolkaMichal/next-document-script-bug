import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <Script src="/script-1.js" strategy="beforeInteractive" />
          <Script2 />
      </Head>
      <Script src="/script-3.js" strategy="beforeInteractive" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

function Script2({}) {
    return <Script src="/script-2.js" strategy="beforeInteractive" />
}
