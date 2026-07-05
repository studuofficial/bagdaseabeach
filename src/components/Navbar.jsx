import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isRoomDetail = location.pathname.startsWith('/room/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled || isRoomDetail ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Bagda Sea Beach Jungle Camp" className="nav-logo-img" />
        </Link>
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/room" onClick={closeMenu}>Room</NavLink>
          <NavLink to="/amenities" onClick={closeMenu}>Amenities</NavLink>
          <NavLink to="/tourist" onClick={closeMenu}>Tourist Place</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <Link to="/book" className="btn btn-primary nav-btn" onClick={closeMenu}>Book Now</Link>
        </div>
        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
