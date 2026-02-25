import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-section" id="scroll">
      <div id="header-sticky" className="header-1">
        <div className="container">
          <div className="mega-menu-wrapper bg-body-color">
            <div className="header-main">
              {/* Logo */}
              <div className="header-left">
                <div className="logo">
                  <a href="/" className="header-logo">
                    <img
                      src="/assets/images/logo/logo.png"
                      alt="logo-img"
                      className="img-fluid"
                      width={180}
                      height={60}
                    />
                  </a>
                </div>
              </div>

              {/* Menu - Hidden on mobile, visible on desktop */}
              <div className="header-middle d-none d-xl-block">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul className="d-flex list-unstyled mb-0 gap-3">
                        <li className="has-dropdown active menu-thumb">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/services">Services</Link>
                        </li>
                        <li>
                          <Link to="/case-studies">Case Studies</Link>
                        </li>
                        <li>
                          <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="header-right d-flex justify-content-end align-items-center gap-3">
                {/* Contact button - Hidden on small screens */}
                <Link to="/contact" className="theme-btn d-none d-md-block">
                  Contact Us
                </Link>

                {/* Hamburger - Visible only on mobile/tablet */}
                <div className="header__hamburger d-block d-xl-none">
                  <div className="sidebar__toggle">
                    hello
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;