import React from "react";

export const Blog = () => {
  return (
    <section className="blog fix">
      <div className="blog_wrapper style1">
        <div className="container">
          <div className="blog_content">
            <div className="blog_content_title mb-60">
              <div className="blog_content_title_left">
                <h2 className="title" data-aos="fade-up" data-aos-delay="300">
                  Leveraging Technology  <br />
                  For  <span className="theme-color-text">Modern Businesses!</span>
                </h2>

                <p data-aos="fade-up" data-aos-delay="300">
                  Stay competitive today and prepared for what comes next. Give your business an edge as markets evolve, competition increases, and technology becomes key for success.
                </p>
              </div>

              <div
                className="blog_content_title_right"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="btn-wrapper">
                  <a href="/blog">
                    <span className="theme-btn">
                      View All <i className="fa fa-long-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="blog_content_items">
              {/* Blog 1 */}
              <div
                className="single_blog style1"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="single_blog_info">
                  <div className="single_blog_info_head">
                    <div className="date">
                      <i className="fa-solid fa-calendar-days"></i>
                      Februry 12, 2026
                    </div>
                    <div className="comments">
                      <i className="fa-solid fa-calendar-days"></i>
                      Comment
                    </div>
                  </div>

                  <div className="single_blog_info_body">
                    <h2>
                      <a href="/blog-details">
                        Websites and applications built for speed, and performance!
                      </a>
                    </h2>
                  </div>
                </div>

                <div className="single_blog_thumb">
                  <a href="/blog-details">
                    <img
                      src="/assets/images/new/Blog/Websites-and-applications-built-for-speed,-and-performance.jpg"
                      alt="thumb"
                    />
                  </a>
                </div>

                <div className="single_blog_button btn-wrapper d-flex justify-content-md-end">
                  <a className="theme-btn-2" href="/blog-details">
                    Read Now <i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Blog 2 */}
              <div
                className="single_blog style1"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="single_blog_info">
                  <div className="single_blog_info_head">
                    <div className="date">
                      <i className="fa-solid fa-calendar-days"></i>
                      Februry 12, 2026
                    </div>
                    <div className="comments">
                      <i className="fa-solid fa-calendar-days"></i>
                      Comment
                    </div>
                  </div>

                  <div className="single_blog_info_body">
                    <h2>
                      <a href="/blog-details">
                       AI Automation & Integrations for smooth & efficient workflow!
                      </a>
                    </h2>
                  </div>
                </div>

                <div className="single_blog_thumb">
                  <a href="/blog-details">
                    <img
                      src="/assets/images/new/Blog/Cloud-Native-Systems-built-for-real-users-&-handle-real-traffic.jpg"
                      alt="thumb"
                    />
                  </a>
                </div>

                <div className="single_blog_button btn-wrapper d-flex justify-content-md-end">
                  <a className="theme-btn-2" href="/blog-details">
                    Read Now <i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Blog 3 */}
              <div
                className="single_blog style1"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="single_blog_info">
                  <div className="single_blog_info_head">
                    <div className="date">
                      <i className="fa-solid fa-calendar-days"></i>
                      Februry 12, 2026
                    </div>
                    <div className="comments">
                      <i className="fa-solid fa-calendar-days"></i>
                      Comment
                    </div>
                  </div>

                  <div className="single_blog_info_body">
                    <h2>
                      <a href="/blog-details">
                        Cloud-Native Systems built for real users & handle real traffic!
                      </a>
                    </h2>
                  </div>
                </div>

                <div className="single_blog_thumb">
                  <a href="/blog-details">
                    <img
                      src="/assets/images/new/Blog/AI-Automation-&-Integrations-for-smooth-&-efficient-workflow.jpg"
                      alt="thumb"
                    />
                  </a>
                </div>

                <div className="single_blog_button btn-wrapper d-flex justify-content-md-end">
                  <a className="theme-btn-2" href="/blog-details">
                    Read Now <i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
