import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="foot">
        <section className="left">
          <span className="footer-logo logo">
            <Link to="/"> iNOX-PANDA </Link>{' '}
          </span>
          <p>001 Main Street, Times building , London , New York</p>
          <div className="social-links">
            <span>
              {/* <Link href=""> */}
              <i className="fa fa-facebook" aria-hidden="true"></i>
              {/* </Link> */}
            </span>

            <span>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-google" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </span>
          </div>
        </section>

        <section className="pricing middle-1">
          <h4>Pricing</h4>
          <div>
            <span>Overview</span>
            <span>Premium Plans</span>
            <span>Affiliate Marketing</span>
            <span>Promotions</span>
          </div>
        </section>

        <section className="company middle-2">
          <h4>Company</h4>
          <div>
            <span>About Us</span>
            <span>Blog</span>
            <span>Careers</span>
            <span>Faq's</span>
          </div>
        </section>

        <section className=" newsletter right">
          <h4>NEWSLETTER</h4>
          <p>
            By Subscribing to our NewsLetter , You will get notified everytime
            we launch our new arrivals
          </p>
          <div className="subscribe">
            <input type="text" />
          </div>
          <button className="footer-btn">Subscribe</button>
        </section>
      </footer>

      <p className="copyright">
        Copyright @all Rights reserved | Designed with ❤ by | Anup{' '}
      </p>
    </>
  );
};

export default Footer;
