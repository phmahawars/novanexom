import { Link } from "react-router-dom";
import { Breadcrumb } from "../components/includes/Breadcrumb";

export default function BlogDetails() {
  return (
    <>
      <Breadcrumb title={"Blog Detail"} />
      <div className="blog blog-page fix">
        <div className="container">
          <div className="row">
            {/* Blog Content */}
            <div className="col-xl-8">
              <div className="blog-post-details style2">
                <div className="single-blog-post style2">
                  <div className="post-featured-thumb">
                    <img
                      src="/assets/images/blog/blogThumb1_2.png"
                      alt="thumb"
                    />
                    <div className="content-date">
                      <h4>31 December, 2024</h4>
                    </div>
                    <div className="content-meta">
                      <ul>
                        <li>
                          <i className="fa-regular fa-user"></i> By admin
                        </li>
                        <li>
                          <i className="fa-regular fa-folder-open"></i> Category
                        </li>
                        <li>
                          <i className="fa-regular fa-comments"></i> Comments
                          (05)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="post-content">
                    <h3>
                      This involves the use of computers, software, and networks
                    </h3>
                    <p>
                      Technology refers to the application of scientific
                      knowledge for practical purposes, particularly in industry
                      and everyday life.
                    </p>
                    <p>
                      Business consulting involves providing expert advice and
                      guidance to businesses to improve operations and
                      efficiency.
                    </p>
                  </div>
                </div>

                {/* Highlight */}
                <div className="hilight-text wow fadeInUp" data-wow-delay=".8s">
                  <p>
                    Technology encompasses tools, machines, systems, and
                    processes designed to solve problems and improve efficiency.
                  </p>
                  <h4>Stanio lainto</h4>
                  <span>CEO</span>
                </div>

                {/* List */}
                <div className="content-items">
                  <ul>
                    <li>Push for sustainable technology</li>
                    <li>Green energy solutions</li>
                    <li>Wearable and intuitive interfaces</li>
                    <li>Technology shaping daily life</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-items">
                <div className="title-area">
                  <h2 className="title">Send Your Free Message</h2>
                </div>

                <div className="contact-content">
                  <form className="contact-form-items" id="contact-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                          ></textarea>
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

            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="main-sidebar2">
                {/* Search */}
                <div
                  className="single-sidebar-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="search-widget-wrapper">
                    <div className="wid-title">
                      <h3 className="fast-title">Search</h3>
                    </div>
                    <div className="search-widget">
                      <form>
                        <input type="text" placeholder="Write Here" />
                        <button type="submit">
                          <i className="fa-sharp fa-light fa-magnifying-glass"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Recent Posts */}
                <div
                  className="single-sidebar-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="wid-title">
                    <h3>Recent Post</h3>
                  </div>

                  <div className="recent-post-area">
                    {[
                      {
                        img: "/assets/images/blog/blogPostThumb1_2.png",
                        title: "Robots automated systems",
                        slug: "robots-automated-systems",
                      },
                      {
                        img: "/assets/images/blog/blogPostThumb1_2.png",
                        title: "Renewable energy sources",
                        slug: "renewable-energy-sources",
                      },
                      {
                        img: "/assets/images/blog/blogPostThumb1_2.png",
                        title: "AI and machine learning",
                        slug: "ai-and-machine-learning",
                      },
                    ].map((post, index) => (
                      <div className="recent-items" key={index}>
                        <div className="recent-thumb">
                          <img src={post.img} alt={post.title} />
                        </div>
                        <div className="recent-content">
                          <ul>
                            <li>
                              <i className="fa-regular fa-folder-open"></i>{" "}
                              Category
                            </li>
                          </ul>
                          <h6>
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div
                  className="single-sidebar-widget wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="wid-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="news-widget-categories">
                    <ul>
                      {[
                        "Database Security",
                        "IT Consultancy",
                        "App Development",
                        "UI/UX Design",
                        "Cyber Security",
                      ].map((cat, index) => (
                        <li key={index}>
                          <Link
                            to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {cat}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div
                  className="single-sidebar-widget wow fadeInUp mb-0"
                  data-wow-delay=".8s"
                >
                  <div className="wid-title">
                    <h3>Tags</h3>
                  </div>
                  <div className="news-widget-categories">
                    <div className="tagcloud">
                      {[
                        "applications",
                        "blockchain",
                        "Analysis",
                        "secure",
                        "Planning",
                      ].map((tag, index) => (
                        <Link key={index} to={`/tag/${tag.toLowerCase()}`}>
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
