import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import '../styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vladimir Vuksanovic</title>
        <link rel="icon" href="favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
