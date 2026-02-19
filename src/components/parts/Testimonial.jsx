'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export const Testimonials = () => {
  return (
    <section className="testimonials section-padding fix">
      <div className="testimonial-container-wrapper style1">
        <div className="container">
          <div className="testimonials_content">

            <div className="testimonials_title">
              <h2 className="title" data-aos="fade-up" data-aos-delay="300">
                HONEST   <span className="theme-color-text">FEEDBACKS</span> FROM PREVIOUS CLIENTS
              </h2>
              <p data-aos="fade-up" data-aos-delay="400">
                Listen to what our clients say about working with our IT team. See why they trust us for our IT solutions.
              </p>
            </div>

            <div className="testimonials_slider" data-aos="fade-up" data-aos-delay="500">
              <Swiper
                modules={[Navigation]}
                loop={true}
                spaceBetween={24}
                navigation={{
                  prevEl: '.slider-prev',
                  nextEl: '.slider-next',
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  992: { slidesPerView: 2 },
                }}
              >

                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="testimonials_item style1">
                    <div className="testimonials_item_img">
                      {/* SVG unchanged */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="45" viewBox="0 0 60 45" fill="none">
                        <path
                          d="M34.9446 24.5697H50.4401C50.1525 27.7056 48.6228 30.6265 46.153 32.7561C43.6831 34.8857 40.4525 36.0694 37.0983 36.0736C36.7992 36.0736 36.5124 36.1851 36.3009 36.3836C36.0895 36.582 35.9707 36.8511 35.9707 37.1318V43.9419C35.9707 44.2225 36.0895 44.4916 36.3009 44.6901C36.5124 44.8885 36.7992 45 37.0983 45C49.7275 45 60 35.3605 60 23.5116V1.05813C60 0.777494 59.8812 0.508355 59.6697 0.309918C59.4583 0.111481 59.1715 0 58.8724 0H34.9446C34.6455 0 34.3587 0.111481 34.1472 0.309918C33.9358 0.508355 33.817 0.777494 33.817 1.05813V23.5116C33.817 23.7922 33.9358 24.0613 34.1472 24.2598C34.3587 24.4582 34.6455 24.5697 34.9446 24.5697ZM36.0722 2.11625H57.7448V23.5116C57.7448 33.8389 49.0893 42.3039 38.2259 42.8541V38.1518C46.3289 37.6079 52.7427 31.2486 52.7427 23.5116C52.7427 23.2309 52.6239 22.9618 52.4124 22.7634C52.201 22.5649 51.9142 22.4534 51.6151 22.4534H36.0722V2.11625ZM1.12761 24.5697H16.6254C16.3383 27.7058 14.8088 30.6269 12.3388 32.7566C9.86887 34.8863 6.63791 36.0699 3.28359 36.0736C2.98453 36.0736 2.69772 36.1851 2.48625 36.3836C2.27479 36.582 2.15599 36.8511 2.15599 37.1318V43.9419C2.15599 44.2225 2.27479 44.4916 2.48625 44.6901C2.69772 44.8885 2.98453 45 3.28359 45C15.9128 45 26.1853 35.3605 26.1853 23.5116V1.05813C26.1853 0.777494 26.0665 0.508355 25.855 0.309918C25.6436 0.111481 25.3568 0 25.0577 0H1.12761C0.828547 0 0.541736 0.111481 0.330269 0.309918C0.118801 0.508355 0 0.777494 0 1.05813V23.5116C0 23.7922 0.118801 24.0613 0.330269 24.2598C0.541736 24.4582 0.828547 24.5697 1.12761 24.5697ZM2.25522 2.11625H23.9301V23.5116C23.9301 33.8389 15.2723 42.3039 4.4112 42.8541V38.1518C12.5142 37.6079 18.9258 31.2486 18.9258 23.5116C18.9258 23.2309 18.807 22.9618 18.5955 22.7634C18.384 22.5649 18.0972 22.4534 17.7982 22.4534H2.25522V2.11625Z"
                          fill="#0fd094" />
                      </svg>
                    </div>

                    <div className="testimonials_item_content">
                      <p>
                        It was a great experience working with Novanexom. They don't just build but stay involved during the whole process. Our website, automation, and marketing stack finally work together. It feels like having an internal team that actually cares about you. Highly recommended!
                      </p>

                      <div className="profile">
                        <img
                          src="/assets/images/profile/profileImg2.png"
                          alt="profile"
                        />
                        <div className="profile_info">
                          <h4>Helen Suarej</h4>
                          <span>Startup Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="testimonials_item style1">
                    <div className="testimonials_item_img">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="45" viewBox="0 0 60 45" fill="none">
                        <path
                          d="M34.9446 24.5697H50.4401C50.1525 27.7056 48.6228 30.6265 46.153 32.7561C43.6831 34.8857 40.4525 36.0694 37.0983 36.0736C36.7992 36.0736 36.5124 36.1851 36.3009 36.3836C36.0895 36.582 35.9707 36.8511 35.9707 37.1318V43.9419C35.9707 44.2225 36.0895 44.4916 36.3009 44.6901C36.5124 44.8885 36.7992 45 37.0983 45C49.7275 45 60 35.3605 60 23.5116V1.05813C60 0.777494 59.8812 0.508355 59.6697 0.309918C59.4583 0.111481 59.1715 0 58.8724 0H34.9446C34.6455 0 34.3587 0.111481 34.1472 0.309918C33.9358 0.508355 33.817 0.777494 33.817 1.05813V23.5116C33.817 23.7922 33.9358 24.0613 34.1472 24.2598C34.3587 24.4582 34.6455 24.5697 34.9446 24.5697ZM36.0722 2.11625H57.7448V23.5116C57.7448 33.8389 49.0893 42.3039 38.2259 42.8541V38.1518C46.3289 37.6079 52.7427 31.2486 52.7427 23.5116C52.7427 23.2309 52.6239 22.9618 52.4124 22.7634C52.201 22.5649 51.9142 22.4534 51.6151 22.4534H36.0722V2.11625ZM1.12761 24.5697H16.6254C16.3383 27.7058 14.8088 30.6269 12.3388 32.7566C9.86887 34.8863 6.63791 36.0699 3.28359 36.0736C2.98453 36.0736 2.69772 36.1851 2.48625 36.3836C2.27479 36.582 2.15599 36.8511 2.15599 37.1318V43.9419C2.15599 44.2225 2.27479 44.4916 2.48625 44.6901C2.69772 44.8885 2.98453 45 3.28359 45C15.9128 45 26.1853 35.3605 26.1853 23.5116V1.05813C26.1853 0.777494 26.0665 0.508355 25.855 0.309918C25.6436 0.111481 25.3568 0 25.0577 0H1.12761C0.828547 0 0.541736 0.111481 0.330269 0.309918C0.118801 0.508355 0 0.777494 0 1.05813V23.5116C0 23.7922 0.118801 24.0613 0.330269 24.2598C0.541736 24.4582 0.828547 24.5697 1.12761 24.5697ZM2.25522 2.11625H23.9301V23.5116C23.9301 33.8389 15.2723 42.3039 4.4112 42.8541V38.1518C12.5142 37.6079 18.9258 31.2486 18.9258 23.5116C18.9258 23.2309 18.807 22.9618 18.5955 22.7634C18.384 22.5649 18.0972 22.4534 17.7982 22.4534H2.25522V2.11625Z"
                          fill="#0fd094" />
                      </svg>
                    </div>

                    <div className="testimonials_item_content">
                      <p>
                        Thanks, Novanexom, you have saved us big time. Before you, we were burning time fixing things we shouldn’t have been fixing. Our website is no longer static and useless. You really turned it into a real asset. Performance improved, updates became easier, and the structure is awesome.
                      </p>

                      <div className="profile">
                        <img
                          src="/assets/images/profile/profileImg2.png"
                          alt="profile"
                        />
                        <div className="profile_info">
                          <h4>Ryan Malad</h4>
                          <span>Growth Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                

              </Swiper>

              {/* Custom Navigation */}
              <div className="testimonials-slider-button">
                <button className="slider-prev">
                  <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <button className="slider-next">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}