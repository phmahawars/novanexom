import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header-section" id="scroll">
      <div id="header-sticky" className="header-1">
        <div className="container">
          <div className="mega-menu-wrapper bg-body-color">
            <div className="header-main d-flex justify-content-between align-items-center">
              
              {/* Logo */}
              <div className="logo">
                <a href="/" className="header-logo">
                  <img
                    src="/assets/images/logo/white-logo-400.png"
                    alt="logo-img"
                  />
                </a>
              </div>
              <div className="d-flex align-items-center gap-4">
                
              {/* Desktop Menu */}
              <nav className="d-none d-xl-block">
                <ul className="d-flex list-unstyled mb-0 gap-4 menu-thumb">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/case-studies">Case Studies</a></li>
                  <li><a href="/blogs">Blogs</a></li>
                  {/* <li><a href="/contact">Contact</a></li> */}
                </ul>
              </nav>

              {/* Contact Button (Desktop) */}
              <a href="/contact" className="theme-btn d-none d-md-block">
                Contact Us
              </a>

              {/* Hamburger Button (Mobile) */}
              <div
                className="d-block d-xl-none"
                onClick={toggleMenu}
                style={{ fontSize: "24px", cursor: "pointer" }}
              >
                ☰
              </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="mobile-menu d-xl-none mt-3">
                <ul className="list-unstyled d-flex flex-column gap-3">
                  <li><a href="/" onClick={closeMenu}>Home</a></li>
                  <li><a href="/about" onClick={closeMenu}>About Us</a></li>
                  <li><a href="/services" onClick={closeMenu}>Services</a></li>
                  <li><a href="/case-studies" onClick={closeMenu}>Case Studies</a></li>
                  <li><a href="/blogs" onClick={closeMenu}>Blogs</a></li>
                  <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
