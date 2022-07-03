import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo"> iNOX-PANDA</div>
      <div className="nav-links">
        <span className="list">
          <Link to="/">Home</Link>
        </span>
        <span className="list">
          <Link to="/services">Services</Link>
        </span>
        <span className="list">
          <Link to="/products">Products</Link>
        </span>
        <span className="list">
          <Link to="/contact">Contact</Link>
        </span>
        <span className="list">
          <Link to="/about">About</Link>
        </span>
      </div>
      <div className="login">
        <Link to="/cart">
          <i className="fa fa-shopping-cart" aria-hidden="true">
            <span className="cart-span"> 13</span>
          </i>
        </Link>
        <Link to="/login">
          <i className="fa fa-user" aria-hidden="true">
            {' '}
          </i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
