import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

interface NavbarProps {
  // isMenuOpen and setIsMenuOpen are no longer needed
}

const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scroll to hash if present
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Case Studies' },
    { path: '/services', label: 'Services' },
    // { path: '/testimonials', label: 'Testimonials' }, // Commented out to hide from navigation
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Main Navigation - Always Visible */}
      <AnimatePresence>
        <motion.nav
          className={`navbar ${scrolled ? 'scrolled' : ''}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="nav-content">
            <Link to="/" className="navbar-brand">
              <span className="brand-text">Crecent</span>
              <span className="brand-dot">AI</span>
            </Link>

            {/* Desktop Navigation Group */}
            <div className="navbar-right-group">
              <div className="navbar-links">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link 
                to="/contact" 
                className="cta-button"
              >
                Get Started
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>
    </>
  );
};

export default Navbar; 