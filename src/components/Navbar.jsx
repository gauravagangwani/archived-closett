import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container flex items-center justify-between navbar-inner">
        <div className="logo">
          <a href="/" className="text-gradient">Arचived Closet</a>
        </div>
        <div className="nav-links">
          <a href="#new">New Arrivals</a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-actions">
          <button className="cart-btn">
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
