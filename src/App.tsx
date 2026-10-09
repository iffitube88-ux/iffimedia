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

// Admin imports
import AdminLogin from "./admin/Login";
import AdminLayout from "./admin/Layout";
import AdminDashboard from "./admin/Dashboard";
import AdminClients from "./admin/Clients";
import AdminMeetings from "./admin/Meetings";
import AdminSettings from "./admin/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/work" element={<Layout><CaseStudiesArchive /></Layout>} />
        <Route path="/work/:id" element={<Layout><CaseStudyDetail /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/insights" element={<Layout><BlogArchive /></Layout>} />
        <Route path="/insights/:slug" element={<Layout><BlogPost /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="clients" element={<AdminClients />} />
          <Route path="meetings" element={<AdminMeetings />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        
        {/* 404 */}
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
