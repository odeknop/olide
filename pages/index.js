import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Header from '../components/header';

const Home = () => (
  <div>
    <Head title='Olivier Deknop' />
    <Header />
    <div className='hero' data-img='hey2'>
      <h1 className='title'>olivier deknop</h1>
      <p className='description' data-text={process.env.TEST}>
        Full-stack software engineer with a passion for product design and the little details.
      </p>
      <div className='row'>
        <Link href='https://github.com/odeknop'>
          <a className='card'>
            <h3>Github &rarr;</h3>
            <p>Learn more about Next on Github and in their examples</p>
          </a>
        </Link>
        <Link href='https://gitlab.com/odeknop'>
          <a className='card'>
            <h3>Gitlab &rarr;</h3>
            <p>
              Find other example boilerplates on the <code>create-next-app</code> site
            </p>
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/odeknop/'>
          <a className='card'>
            <h3>LinkedIn &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
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
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
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
