import React from 'react';
import Nav from '../components/nav';

const Header = () => (
  <header>
    <div className='wrapper'>
      <div className='logo'>
        <a href='/'>
          <img src='/static/oldk-logo.svg' alt='' />
        </a>
      </div>
    </div>

    <style jsx>{`
      .logo {
        padding: 20px;
      }
      .wrapper {
        display: table;
      }
      .wrapper > div {
        display: table-cell;
        width: 100%;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </header>
);

export default Header;
