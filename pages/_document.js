import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import * as snippet from '@segment/snippet';

const {
  ANALYTICS_WRITE_KEY = 'Avvq55wjs6z75lIlmwyluiG4hatFiGbZ',
  NODE_ENV = 'development'
} = process.env;

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  renderSnippet() {
    const opts = {
      apiKey: ANALYTICS_WRITE_KEY,
      page: true // Set this to `false` if you want to manually fire `analytics.page()` from within your pages.
    };
    if (NODE_ENV === 'development') {
      return snippet.max(opts);
    }
    return snippet.min(opts);
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Inject the Segment snippet into the <head> of the document  */}
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
        </body>
      </html>
    );
  }
}
