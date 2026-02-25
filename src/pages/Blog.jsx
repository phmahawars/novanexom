import React, { useEffect, useState } from 'react'
import { Breadcrumb } from '../components/includes/Breadcrumb'
import { Link } from 'react-router-dom'
import { getAllBlogs } from "../api/blogService";

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs();
        setBlogs(data.blogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // if (loading) return <h2>Loading blogs...</h2>

  return (
    <>
      <Breadcrumb title={"Blog"} />
      <div className="blog blog-page">
        <div className="container">
          <div className="row">

            {/* Blog List */}
            <div className="col-xl-8">
              <div className="blog-post-details">

                {/* Single Post */}
                <div className="single-blog-post">
                  <div className="post-featured-thumb">
                    <img src="/assets/images/blog/blogThumb1_2.png" alt="thumb" />
                    <div className="content-date">
                      <h4>31 December, 2024</h4>
                    </div>
                    <div className="content-meta">
                      <ul>
                        <li><i className="fa-regular fa-user"></i> By admin</li>
                        <li><i className="fa-regular fa-folder-open"></i> Category</li>
                        <li><i className="fa-regular fa-comments"></i> Comments (05)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="post-content">
                    <h3>
                      <Link to="/blog/web-technology">
                        This involves the use of computers, software, and networks
                      </Link>
                    </h3>
                    <p>
                      Technology refers to the application of scientific knowledge for
                      practical purposes, particularly in industry and everyday life.
                    </p>
                    <Link to="/blog/web-technology">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>

                {/* Single Post */}
                <div className="single-blog-post">
                  <div className="post-featured-thumb">
                    <img src="/assets/images/blog/blogThumb1_2.png" alt="thumb" />
                    <div className="content-date">
                      <h4>31 December, 2024</h4>
                    </div>
                    <div className="content-meta">
                      <ul>
                        <li><i className="fa-regular fa-user"></i> By admin</li>
                        <li><i className="fa-regular fa-folder-open"></i> Category</li>
                        <li><i className="fa-regular fa-comments"></i> Comments (05)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="post-content">
                    <h3>
                      <Link to="/blog/web-technology">
                        This involves the use of computers, software, and networks
                      </Link>
                    </h3>
                    <p>
                      Technology refers to the application of scientific knowledge for
                      practical purposes, particularly in industry and everyday life.
                    </p>
                    <Link to="/blog/web-technology">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>

                {/* Repeat Post */}
                <div className="single-blog-post">
                  <div className="post-featured-thumb">
                    <img src="/assets/images/blog/blogThumb1_2.png" alt="thumb" />
                    <div className="content-date">
                      <h4>31 December, 2024</h4>
                    </div>
                    <div className="content-meta">
                      <ul>
                        <li><i className="fa-regular fa-user"></i> By admin</li>
                        <li><i className="fa-regular fa-folder-open"></i> Category</li>
                        <li><i className="fa-regular fa-comments"></i> Comments (05)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="post-content">
                    <h3>
                      <Link to="/blog/data-processing">
                        Processing and distributing data
                      </Link>
                    </h3>
                    <p>
                      Technology refers to the application of scientific knowledge for
                      practical purposes.
                    </p>
                    <Link to="/blog/data-processing">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>

              </div>

              {/* Pagination */}
              <div className="pagination_area style1">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" to="#">1</Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">2</Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">3</Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      &raquo;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="main-sidebar2">

                {/* Search */}
                <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".2s">
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
                <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".6s">
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
                              <i className="fa-regular fa-folder-open"></i> Category
                            </li>
                          </ul>
                          <h6>
                            <Link to={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".4s">
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
                          <Link to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}>
                            {cat}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div className="single-sidebar-widget wow fadeInUp mb-0" data-wow-delay=".8s">
                  <div className="wid-title">
                    <h3>Tags</h3>
                  </div>
                  <div className="news-widget-categories">
                    <div className="tagcloud">
                      {["applications", "blockchain", "Analysis", "secure", "Planning"].map(
                        (tag, index) => (
                          <Link key={index} to={`/tag/${tag.toLowerCase()}`}>
                            {tag}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
