import React, { useEffect, useState } from 'react'
import { Breadcrumb } from '../components/includes/Breadcrumb'
import { Link } from 'react-router-dom'
import { getBlogs } from '../lib/api'

export const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)

  useEffect(() => {
    fetchBlogs(currentPage)
  }, [currentPage])

  const fetchBlogs = async (page) => {
    setLoading(true)
    setError(null)
    try {
      const response = await getBlogs(page, 5)

      if (response.status && response.data && response.data.data) {
        setBlogs(response.data.data)
        setLastPage(response.data.last_page || 1)
      }
    } catch (err) {
      setError('Failed to load blogs')
      console.error('Error fetching blogs:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return dateString
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Breadcrumb title={"Blog"} />
      <div className="blog blog-page">
        <div className="container">
          <div className="row">

            {/* Blog List */}
            <div className="col-xl-8">
              <div className="blog-post-details">

                {/* Loading State */}
                {loading && (
                  <div className="text-center py-5">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                    <p className="mt-3">Loading blogs...</p>
                  </div>
                )}

                {/* Error State */}
                {error && !loading && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                {/* Blog Posts */}
                {!loading && blogs.length > 0 && (
                  blogs.map((blog) => (
                    
                    
                    <div className="single-blog-post" key={blog.id}>
                      <div className="post-featured-thumb">
                        <Link to={`/blog/${blog.slug}`}>
                        <img 
                        className='w-100'
                          src={blog.image_url || '/assets/images/blog/blogThumb1_2.png'} 
                          alt={blog.title}
                          
                        />
                        </Link>
                        <div className="content-date">
                          <h4>{formatDate(blog.created_at)}</h4>
                        </div>
                        <div className="content-meta">
                          <ul>
                            <li className='me-3'><i className="fa-regular fa-user"></i> {blog.author || 'admin'}</li>
                            <li><i className="fa-regular fa-folder-open"></i> {blog.category?.name || 'Category'}</li>
                          </ul>
                        </div>
                      </div>

                      <div className="post-content">
                        <h3>
                          <Link to={`/blog/${blog.slug}`}>
                            {blog.title}
                          </Link>
                        </h3>
                        <p>
                          {blog.excerpt || blog.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}
                        </p>
                        <Link to={`/blog/${blog.slug}`}>
                          Read More <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  ))
                )}

                {/* No Blogs State */}
                {!loading && blogs.length === 0 && !error && (
                  <div className="text-center py-5">
                    <p className="text-muted">No blogs available at the moment.</p>
                  </div>
                )}

              </div>

              {/* Pagination */}
              {!loading && lastPage > 1 && (
                <div className="pagination_area style1">
                  <ul className="pagination">
                    {/* Previous Button */}
                    <li className="page-item">
                      <button 
                        className="page-link" 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                      >
                        &laquo; Previous
                      </button>
                    </li>

                    {/* Page Numbers */}
                    {Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
                      <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                        <button 
                          className="page-link" 
                          onClick={() => handlePageChange(page)}
                          style={{ fontWeight: page === currentPage ? 'bold' : 'normal' }}
                        >
                          {page}
                        </button>
                      </li>
                    ))}

                    {/* Next Button */}
                    <li className="page-item">
                      <button 
                        className="page-link" 
                        onClick={() => currentPage < lastPage && handlePageChange(currentPage + 1)}
                        disabled={currentPage === lastPage}
                        style={{ opacity: currentPage === lastPage ? 0.5 : 1, cursor: currentPage === lastPage ? 'not-allowed' : 'pointer' }}
                      >
                        Next &raquo;
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="main-sidebar2">

                {/* Recent Posts */}
                <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".6s">
                  <div className="wid-title">
                    <h3>Recent Post</h3>
                  </div>

                  <div className="recent-post-area">
                    {!loading && blogs.length > 0 && (
                      blogs.slice(0, 3).map((blog) => (
                        <div className="recent-items" key={blog.id}>
                          <div className="recent-thumb">
                            <img 
                            className='w-100'
                              src={blog.image_url || '/assets/images/blog/blogPostThumb1_2.png'} 
                              alt={blog.title}
                             
                            />
                          </div>
                          <div className="recent-content">
                            <ul>
                              <li>
                                <i className="fa-regular fa-folder-open"></i> {blog.category?.name || 'Category'}
                              </li>
                            </ul>
                            <h6>
                              <Link to={`/blog/${blog.slug}`}>
                                {blog.title}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Categories */}
                {/* <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".4s">
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
                </div> */}

                {/* Tags */}
                {/* <div className="single-sidebar-widget wow fadeInUp mb-0" data-wow-delay=".8s">
                  <div className="wid-title">
                    <h3>Tags</h3>
                  </div>
                  <div className="news-widget-categories">
                    <div className="tagcloud">
                      {!loading && blogs.length > 0 && blogs[0]?.tags && (
                        blogs[0].tags.split(',').map((tag, index) => (
                          <Link key={index} to={`/tag/${tag.trim().toLowerCase()}`}>
                            {tag.trim()}
                          </Link>
                        ))
                      )}
                      {(!blogs[0]?.tags || loading) && (
                        ["applications", "blockchain", "Analysis", "secure", "Planning"].map(
                          (tag, index) => (
                            <Link key={index} to={`/tag/${tag.toLowerCase()}`}>
                              {tag}
                            </Link>
                          )
                        )
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
  )
}