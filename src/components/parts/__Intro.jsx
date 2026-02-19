import React from 'react'

export const Intro = () => {
  return (
    <section className="intro">
  <div className="intro-container-wrapper style1">
    <div className="container">
      <div className="intro_content">
        <h2
          className="intro_content_title"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Tech That <span className="theme-color-text">Unlock</span> <br />
          Business Potentials
        </h2>

        <div className="intro_content_info">
          <div
            className="intro_content_info_left"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              src="/assets/images/intro/introProfileThumb1_1.png"
              alt="thumb"
            />
            <div className="intro_content_info_left_user">
              <h3 className="intro_content_info_left_user_title">
                <span className="counter-number">2,000</span>
                <span>+</span>
              </h3>
              <p className="intro_content_info_left_user_subtitle">
                Happy Clients
              </p>
            </div>
          </div>

          <div
            className="intro_content_info_center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              src="/assets/images/intro/introThumb1_1.png"
              alt="thumb"
            />
          </div>

          <div
            className="intro_content_info_right"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <p>
              IT company that provides a seamless and intuitive experience for
              users.
            </p>

            <div className="intro_content_info_btn">
              <div className="video-wrap ripple-effect rounded-0">
                <a
                  href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
                  className="play-btn popup-video"
                >
                  <img
                    className="playerImg"
                    src="/assets/images/icon/playerIcon1_1.svg"
                    alt="icon"
                  />
                </a>
              </div>
              Watch Video
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
