import { Breadcrumb } from "../components/includes/Breadcrumb";

export default function ContactPage() {
  return (
    <>
        <Breadcrumb title={"Contact Us"} />
    <div className="contact-section">
      <div className="container">
        <div className="row gx-30 gy-5">

          {/* Left Info */}
          <div className="col-xl-5">
            <div className="contact-left-items">
              <div className="title-area">
                <h2 className="title">Contact Us</h2>
              </div>

              <div className="contact-info-items">
                <div className="icon">
                  <i className="fa-solid fa-paper-plane"></i>
                </div>
                <div className="content">
                  <h4>Email</h4>
                  <a href="mailto:thuhang.nute@gmail.com">thuhang.nute@gmail.com</a>
                  <a href="mailto:thuhang.nute@gmail.com">thuhang.nute@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-items">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="content">
                  <h4>Contact</h4>
                  <a href="tel:7045550127">(704) 555-0127</a>
                  <a href="tel:2015550124">(201) 555-0124</a>
                </div>
              </div>

              <div className="contact-info-items">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="content">
                  <h4>Location</h4>
                  <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
                  <span>6391 Elgin St. Celina, Delaware 10299</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-xl-7">
            <div className="contact-right-items">
              <div className="title-area">
                <h2 className="title">Send Your Free Message</h2>
              </div>

              <div className="contact-content">
                <form className="contact-form-items">
                  <div className="row">

                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input type="text" placeholder="Your name" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input type="email" placeholder="Email" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input type="text" placeholder="Phone" />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-clt">
                        <textarea placeholder="Message"></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button type="submit" className="gt-btn">
                        Send Message
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    </>
  );
}
