import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            AI Services to Automate, 
            <span className="gradient-text"> Elevate & Scale</span> 
            Your Business
          </h1>
          <p className="hero-subtitle">
            Where Intelligence Meets Execution. We transform businesses through 
            cutting-edge AI solutions that drive real results.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="cta-button primary">
              Get a Free Strategy Call
              <span className="arrow">→</span>
            </Link>
            <Link to="/projects" className="cta-button secondary">
              View Our Work
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Placeholder for 3D animation */}
          <div className="neural-network-animation">
            {/* We'll add the actual animation component here */}
          </div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="trust-indicators">
        <div className="trust-grid">
          <motion.div 
            className="trust-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="trust-icon">🚀</div>
            <h3>3+ Years</h3>
            <p>of AI Excellence</p>
          </motion.div>

          <motion.div 
            className="trust-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="trust-icon">💡</div>
            <h3>10+</h3>
            <p>AI Use Cases Solved</p>
          </motion.div>

          <motion.div 
            className="trust-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="trust-icon">⭐</div>
            <h3>Top Rated</h3>
            <p>on Upwork & GitHub</p>
          </motion.div>

          <motion.div 
            className="trust-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="trust-icon">📈</div>
            <h3>325+</h3>
            <p>Hours Saved with AI</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="featured-services">
        <h2>Our AI Solutions</h2>
        <div className="services-grid">
          <motion.div 
            className="service-card"
            whileHover={{ y: -10, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="service-icon">🤖</div>
            <h3>Custom AI Agents</h3>
            <p>Build GPT-based agents that work 24/7 to automate your workflows</p>
            <Link to="/services" className="learn-more">
              Learn More <span>→</span>
            </Link>
          </motion.div>

          <motion.div 
            className="service-card"
            whileHover={{ y: -10, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="service-icon">👁️</div>
            <h3>Computer Vision</h3>
            <p>From object detection to quality control automation</p>
            <Link to="/services" className="learn-more">
              Learn More <span>→</span>
            </Link>
          </motion.div>

          <motion.div 
            className="service-card"
            whileHover={{ y: -10, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="service-icon">⚡</div>
            <h3>Business Automation</h3>
            <p>LLM workflows that replace 60% of manual tasks</p>
            <Link to="/services" className="learn-more">
              Learn More <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Case Study Preview */}
      <section className="latest-case-study">
        <div className="case-study-content">
          <motion.div 
            className="case-study-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag">Latest Case Study</span>
            <h2>HR Team Saves 40% Time with AI Resume Screening</h2>
            <p>
              We helped a growing tech company automate their hiring process 
              using custom AI agents, reducing screening time by 40% while 
              improving candidate quality.
            </p>
            <Link to="/projects" className="view-case-study">
              Read the Full Case Study <span>→</span>
            </Link>
          </motion.div>
          <motion.div 
            className="case-study-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Placeholder for case study image */}
            <div className="image-placeholder"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 