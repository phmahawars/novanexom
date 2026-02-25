import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import NotFound from "./pages/Notfound";
import Aos from "aos";
import { useEffect } from "react";
import { ServicePage } from "./pages/ServicePage";
import { ServiceDetail } from "./pages/ServiceDetail";
import CursorMaus from "./components/Cursor";
import { Blog } from "./pages/Blog";
import BlogDetails from "./pages/BlogDetail";
import ContactPage from "./pages/Contact";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";
import { CaseStudies } from "./pages/CaseStudies";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,        // animation only once
      offset: 100,
    });
  }, []);

  return (
    <>
      <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/service-details" element={<ServiceDetail />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-study-details" element={<CaseStudyDetail />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog-detail" element={<BlogDetails />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* pages without header/footer */}
      <Route path="*" element={<NotFound />} />
    </Routes>
     <CursorMaus />
    </>
  );
}

export default App;
