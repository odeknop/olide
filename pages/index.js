import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Header from '../components/header';

const Home = () => (
  <div>
    <Head title='Olivier Deknop' />
    <Header />
    <div className='hero'>
      <h1 className='title'>olivier deknop</h1>
      <p className='description' data-text={process.env.TEST}>
        Full-stack software engineer with a passion for product design and the little details.
      </p>
      <div className='row'>
        <Link href='https://github.com/odeknop'>
          <a className='card'>
            <h3>Github &rarr;</h3>
          </a>
        </Link>
        <Link href='https://twitter.com/odeknop'>
          <a className='card'>
            <h3>Twitter &rarr;</h3>
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/odeknop/'>
          <a className='card'>
            <h3>LinkedIn &rarr;</h3>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      .hero {
        max-width: 100%;
        padding: 0 10px;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: auto;
        text-align: left;
        text-decoration: none;
      }
      .card:hover h3 {
        color: #00366d;
        transition: color .5s;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        transition: color .5s;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

export default Home;
