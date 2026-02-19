import React from "react";

export const Cta = () => {
  return (
    <section className="cta">
      <div className="cta-container-wrapper style1">
        <div className="container">
          <div className="cta_content bg-color2">
            <div className="cta_content_top">
              <h2 className="title" data-aos="fade-up" data-aos-delay="300">
                Start Your Digital Journey  <br />
                Without Any Delay!
              </h2>

              <img
                className="img-custom-anim-left"
                data-aos="fade-up"
                data-aos-delay="300"
                src="/assets/images/new/Start-Your-Digital-Journey.png"
                alt="thumb"
              />
            </div>

            <div className="cta_content_bottom">
              <div
                className="cta_content_bottom_left"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="btn-wrapper">
                  <a href="/contact">
                    <span className="theme-btn">
                      Get Started <i className="fa fa-long-arrow-right"></i>
                    </span>
                  </a>
                </div>

                <div
                  className="video_play_btn"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="video-wrap ripple-effect rounded-0">
                    <a
                      href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
                      className="play-btn popup-video"
                    >
                      <img
                        className="playerImg"
                        src="/assets/images/icon/playerIcon1_2.svg"
                        alt="icon"
                      />
                    </a>
                  </div>
                  Watch Video
                </div>
              </div>

              <div
                className="cta_content_bottom_right"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p>
                  Technology is advancing at an unprecedented speed. Those who act now can grab the growth opportunity. If you start now you can stay relevant, responsive, and ready to win the success race.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
