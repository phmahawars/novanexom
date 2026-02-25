/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../components/includes/Breadcrumb";
import { getBlogById, getBlogs, submitContactForm } from "../lib/api";

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [formLoading, setFormLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    fetchBlogDetail();
    fetchRecentBlogs();
  }, [slug]);

  const fetchBlogDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      // Try to fetch by ID first (if slug is numeric)
      let response;
      if (!isNaN(slug)) {
        response = await getBlogById(slug);
      } else {
        // If slug is not numeric, we need to fetch all blogs and find by slug
        const listResponse = await getBlogs(1, 100);
        if (listResponse.status && listResponse.data && listResponse.data.data) {
          const foundBlog = listResponse.data.data.find(b => b.slug === slug);
          if (foundBlog) {
            response = { status: true, data: foundBlog };
          } else {
            throw new Error("Blog not found");
          }
        }
      }

      if (response && response.status && response.data) {
        setBlog(response.data);
      }
    } catch (err) {
      setError("Failed to load blog details");
      console.error("Error fetching blog:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentBlogs = async () => {
    try {
      const response = await getBlogs(1, 10);
      if (response.status && response.data && response.data.data) {
        setRecentBlogs(response.data.data.slice(0, 3));
      }
    } catch (err) {
      console.error("Error fetching recent blogs:", err);
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
    } catch (e) {
      return dateString;
    }
  };


  if (loading) {
    return (
      <>
        <Breadcrumb title={"Blog Detail"} />
        <div className="blog blog-page fix">
          <div className="container">
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-3">Loading blog...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Breadcrumb title={"Blog Detail"} />
        <div className="blog blog-page fix">
          <div className="container">
            <div className="alert alert-danger" role="alert">
              {error || "Blog not found"}
            </div>
            <Link to="/blogs" className="btn btn-primary mt-3">
              <i className="fa-solid fa-arrow-left"></i> Back to Blogs
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb title={blog.title || "Blog Detail"} />
      <div className="blog blog-page fix">
        <div className="container">
          <div className="row">
            {/* Blog Content */}
            <div className="col-xl-8">
              <div className="blog-post-details style2">
                <div className="single-blog-post style2">
                  <div className="post-featured-thumb">
                    <img
                      src={blog.image || "/assets/images/blog/blogThumb1_2.png"}
                      alt={blog.title}
                      onError={(e) => {
                        e.target.src = "/assets/images/blog/blogThumb1_2.png";
                      }}
                    />
                    <div className="content-date">
                      <h4>{formatDate(blog.created_at)}</h4>
                    </div>
                    <div className="content-meta">
                      <ul>
                        <li>
                          <i className="fa-regular fa-user"></i> By{" "}
                          {blog.author || "admin"}
                        </li>
                        <li>
                          <i className="fa-regular fa-folder-open"></i>{" "}
                          {blog.category?.name || "Category"}
                        </li>
                        <li>
                          <i className="fa-regular fa-comments"></i> Comments
                          (0)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="post-content">
                    <h3>{blog.title}</h3>
                    {blog.excerpt && (
                      <p>{blog.excerpt}</p>
                    )}
                    {blog.description && (
                      <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                    )}
                  </div>
                </div>

                {/* Highlight */}
                {blog.author && (
                  <div className="hilight-text wow fadeInUp" data-wow-delay=".8s">
                    <p>
                      {blog.excerpt || "A great piece of content by our team."}
                    </p>
                    <h4>{blog.author}</h4>
                    <span>Author</span>
                  </div>
                )}

                {/* Tags as List */}
                {blog.tags && (
                  <div className="content-items">
                    <ul>
                      {blog.tags.split(",").map((tag, index) => (
                        <li key={index}>{tag.trim()}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              
            </div>

            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="main-sidebar2">
                

                {/* Recent Posts */}
                <div
                  className="single-sidebar-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="wid-title">
                    <h3>Recent Post</h3>
                  </div>

                  <div className="recent-post-area">
                    {recentBlogs.length > 0 ? (
                      recentBlogs.map((post) => (
                        <div className="recent-items" key={post.id}>
                          <div className="recent-thumb">
                            <img
                              src={
                                post.image ||
                                "/assets/images/blog/blogPostThumb1_2.png"
                              }
                              alt={post.title}
                              onError={(e) => {
                                e.target.src =
                                  "/assets/images/blog/blogPostThumb1_2.png";
                              }}
                            />
                          </div>
                          <div className="recent-content">
                            <ul>
                              <li>
                                <i className="fa-regular fa-folder-open"></i>{" "}
                                {post.category?.name || "Category"}
                              </li>
                            </ul>
                            <h6>
                              <Link to={`/blog/${post.id}`}>
                                {post.title}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted">No recent posts</p>
                    )}
                  </div>
                </div>

                {/* Categories */}
                {/* <div
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
                            to={`/category/${cat
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {cat}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}

                {/* Tags */}
                {/* <div
                  className="single-sidebar-widget wow fadeInUp mb-0"
                  data-wow-delay=".8s"
                >
                  <div className="wid-title">
                    <h3>Tags</h3>
                  </div>
                  <div className="news-widget-categories">
                    <div className="tagcloud">
                      {blog.tags ? (
                        blog.tags.split(",").map((tag, index) => (
                          <Link
                            key={index}
                            to={`/tag/${tag.trim().toLowerCase()}`}
                          >
                            {tag.trim()}
                          </Link>
                        ))
                      ) : (
                        <>
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
                        </>
                      )}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}