import React from 'react';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-brand">© Cruip.com - All rights reserved.</p>
      </div>

      <div className="footer-grid">
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Pricing & Plans</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Our method</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Diversity & Inclusion</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Financial statements</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Community</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Report a vulnerability</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Social</h4>
          <div className="footer-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
