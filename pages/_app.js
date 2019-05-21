import React from 'react';
import App, { Container } from 'next/app';
import * as Sentry from '@sentry/browser';

const SENTRY_PUBLIC_DSN = 'https://254999ee9e9948f0be17d7c99a5a7a18@sentry.io/1388218';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  constructor(...args) {
    super(...args);
    Sentry.init({
      dsn: SENTRY_PUBLIC_DSN
    });
  }

  componentDidCatch(error, errorInfo) {
    Sentry.configureScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    Sentry.captureException(error);

    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
