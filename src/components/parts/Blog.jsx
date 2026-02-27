import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../../lib/api";

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log('blogs', blogs);
  
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async (page) => {
    setLoading(true);
    try {
      const response = await getBlogs(page, 3);
      
      // Handle API response structure
      if (response.status && response.data && response.data.data) {
        setBlogs(response.data.data);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return dateString;
    }
  };

  
  return (
    <section className="blog fix">
      <div className="blog_wrapper style1">
        <div className="container">
          <div className="blog_content">
            {/* Header Section */}
            <div className="blog_content_title mb-60">
              <div className="blog_content_title_left">
                <h2 className="title" data-aos="fade-up" data-aos-delay="300">
                  Leveraging Technology <br />
                  For{" "}
                  <span className="theme-color-text">Modern Businesses!</span>
                </h2>

                <p data-aos="fade-up" data-aos-delay="300">
                  Stay competitive today and prepared for what comes next. Give
                  your business an edge as markets evolve, competition increases,
                  and technology becomes key for success.
                </p>
              </div>

              <div
                className="blog_content_title_right"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="btn-wrapper">
                  <Link to="/blogs">
                    <span className="theme-btn">
                      View All <i className="fa fa-long-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="loading-state text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <p className="mt-3">Loading blogs...</p>
              </div>
            )}


            {/* Blog Items */}
            {!loading && blogs.length > 0 && (
              <div className="blog_content_items">
                {blogs.map((blog, index) => {
                  const delays = ["300", "600", "800"];
                  const delay = delays[index % delays.length];
                  
                  return (
                    <div
                      key={blog.id}
                      className="single_blog style1"
                      data-aos="fade-up"
                      data-aos-delay={delay}
                    >
                      <div className="single_blog_info">
                        <div className="single_blog_info_head">
                          <div className="date">
                            <i className="fa-solid fa-calendar-days"></i>
                            {formatDate(blog.created_at)}
                          </div>
                          <div className="comments">
                            <i className="fa-solid fa-comment"></i>
                            {blog.comments_count || "Comments"}
                          </div>
                        </div>

                        <div className="single_blog_info_body">
                          <h2>
                            <Link to={`/blogs/${blog.slug}`}>
                              {blog.title || "Untitled Blog"}
                            </Link>
                          </h2>
                        </div>
                      </div>

                      <div className="single_blog_thumb">
                        <Link to={`/blogs/${blog.slug}`}>
                          <img
                            src={blog.image}
                            alt={blog.title || "Blog thumbnail"}
                            
                          />
                        </Link>
                      </div>

                      <div className="single_blog_button btn-wrapper d-flex justify-content-md-end">
                        <Link
                          className="theme-btn-2"
                          to={`/blogs/${blog.slug}`}
                        >
                          Read Now{" "}
                          <i className="fa fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* No Blogs State */}
            {!loading && blogs.length === 0 && (
              <div className="text-center py-5">
                <p className="text-muted">No blogs available at the moment.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;