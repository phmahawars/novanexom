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
                <Link to="/" className="header-logo">
                  <img
                    src="/assets/images/logo/logo.png"
                    alt="logo-img"
                    width={150}
                  />
                </Link>
              </div>
              <div className="d-flex align-items-center gap-4">
                
              {/* Desktop Menu */}
              <nav className="d-none d-xl-block">
                <ul className="d-flex list-unstyled mb-0 gap-4 menu-thumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/case-studies">Case Studies</Link></li>
                  <li><Link to="/blogs">Blogs</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>

              {/* Contact Button (Desktop) */}
              <Link to="/contact" className="theme-btn d-none d-md-block">
                Contact Us
              </Link>

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
                  <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                  <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                  <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
                  <li><Link to="/case-studies" onClick={closeMenu}>Case Studies</Link></li>
                  <li><Link to="/blogs" onClick={closeMenu}>Blogs</Link></li>
                  <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
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