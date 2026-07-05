import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BedDouble, CalendarCheck, Sparkles, Phone, Info, MapPin } from 'lucide-react';

const MobileNav = () => {
  return (
    <nav className="mobile-bottom-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Home size={18} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Info size={18} />
        <span>About</span>
      </NavLink>
      <NavLink to="/room" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <BedDouble size={18} />
        <span>Rooms</span>
      </NavLink>
      <NavLink to="/book" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <div className="center-nav-item">
          <CalendarCheck size={20} color="white" />
        </div>
        <span>Book</span>
      </NavLink>
      <NavLink to="/tourist" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <MapPin size={18} />
        <span>Tourist</span>
      </NavLink>
      <NavLink to="/amenities" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Sparkles size={18} />
        <span>Amenity</span>
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Phone size={18} />
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default MobileNav;
