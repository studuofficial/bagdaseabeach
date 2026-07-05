import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/footer-logo.png" alt="Bagda Sea Beach Jungle Camp" className="footer-logo-img" />
            <p>Where luxury meets the horizon. Experience the finest coastal retreat in the heart of nature.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/p/Bagda-Sea-Beach-jungle-camp-61551041402440/" target="_blank" rel="noopener noreferrer" title="Facebook"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/bagdaseabeach/" target="_blank" rel="noopener noreferrer" title="Instagram"><Instagram size={20} /></a>
              <a href="https://www.justdial.com/Balasore/Bagda-Sea-Beach-Jungle-Camp-Dublagadi-Bahabalpur/9999P6782-6782-231230162233-K7X2_BZDET" target="_blank" rel="noopener noreferrer" title="JustDial"><MapPin size={20} /></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/room">Room</Link></li>
              <li><Link to="/amenities">Amenities</Link></li>
              <li><Link to="/tourist">Tourist Place</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Support & Legal</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/terms">Terms & Condition</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><MapPin size={16} /> Bagda, Dublagadi, Balasore, Odisha-756027</p>
            <p>(+91) 8917504152 / 8658559482</p>
            <p>booking@bagdaseabeach.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Bagda Sea Beach Resort. All rights reserved. | Manage by <a href="https://sktcloudsuites.cloud/" target="_blank" rel="noopener noreferrer">SKT Cloud Suites</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
