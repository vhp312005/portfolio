import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import ProjectsPage from './pages/ProjectsPage'
import About from './pages/About'
// import Testimonials from './pages/Testimonials' // Commented out to hide the page
import Contact from './pages/Contact'
import CaseStudy from './pages/CaseStudy'
import TestPage from './pages/TestPage'
import './App.css'

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when route changes
    
    // Smooth scroll to hash if present
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/test-page" element={<TestPage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App 