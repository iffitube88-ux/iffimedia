import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { CaseStudiesArchive, CaseStudyDetail } from "./pages/CaseStudies";
import About from "./pages/About";
import { BlogArchive, BlogPost } from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<CaseStudiesArchive />} />
          <Route path="/work/:id" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<BlogArchive />} />
          <Route path="/insights/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
