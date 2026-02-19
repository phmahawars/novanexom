import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer-section position-relative">
  <div className="footer-widgets-wrapper fix">
    <div className="container">

      <div className="footer_top-head">
        <div className="footer-logo">
          <img src="./assets/images/logo/logo2.svg" alt="logo" />
        </div>
        <div className="btn-wrapper">
          <a className="theme-btn" href="#scroll">
            Scroll Up <i className="fa fa-long-arrow-up"></i>
          </a>
        </div>
      </div>

      <div className="row">

        <div
          className="col-xl-2 col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="single-footer-widget">
            <div className="widget-head">
              <h3>Resources</h3>
            </div>
            <ul className="list-area">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div
          className="col-xl-4 col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="single-footer-widget">
            <div className="widget-head">
              <h3>Use cases</h3>
            </div>
            <ul className="list-area">
              <li><a href="#">Know Your Business</a></li>
              <li><a href="#">TechSphere Solutions</a></li>
              <li><a href="#">Know Your Customer</a></li>
              <li><a href="#">Onboarding</a></li>
            </ul>
          </div>
        </div>

        <div
          className="col-xl-3 col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="single-footer-widget">
            <div className="widget-head">
              <h3>Products</h3>
            </div>
            <ul className="list-area">
              <li><a href="#">Workflow</a></li>
              <li><a href="#">Orchestration</a></li>
              <li><a href="#">No-code onboarding</a></li>
              <li><a href="#">Reports</a></li>
            </ul>
          </div>
        </div>

        <div
          className="col-xl-3 col-lg-4 col-md-6 ps-lg-5"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="single-footer-widget">
            <div className="widget-head">
              <h3>Developers</h3>
            </div>
            <ul className="list-area">
              <li><a href="/about">Documentation</a></li>
              <li><a href="/services">API Reference</a></li>
              <li>
                <h6 className="language">Language</h6>
                <select
                  name="lang"
                  id="lang-select"
                  className="nice-select"
                  defaultValue="english"
                >
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="spanish">Spanish</option>
                  <option value="chinese">Chinese</option>
                  <option value="arabic">Arabic</option>
                  <option value="portuguese">Portuguese</option>
                </select>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <div className="container">
      <div className="footer-wrapper d-flex align-items-center justify-content-between">

        <p >
          © Itek 2025 | All Rights Reserved
        </p>

        <ul
          className="brand-logo"
        >
          <li><a href="/privacy">Privacy <span className="line"> | </span></a></li>
          <li><a href="/terms">Terms <span className="line"> | </span></a></li>
          <li><a href="/sitemap">Sitemap <span className="line"> | </span></a></li>
          <li><a href="/help">Help</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  )
}
