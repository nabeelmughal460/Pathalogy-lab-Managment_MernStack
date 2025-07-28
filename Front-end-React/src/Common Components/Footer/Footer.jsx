import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-column">
        <h4>Company</h4>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
        <a href="#">Blog</a>
      </div>

      <div className="footer-column">
        <h4>Support</h4>
        <a href="#">Help Center</a>
        <a href="#">Contact Us</a>
        <a href="#">FAQs</a>
        <a href="#">Terms of Service</a>
      </div>

      <div className="footer-column">
        <h4>Follow Us</h4>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
