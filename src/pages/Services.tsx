import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Services.css'; // Assuming this stylesheet will be updated or already contains relevant styles

const Services: React.FC = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <motion.div
          className="services-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Transforming Digital Innovation: AI, Web & Mobile Solutions</h1>
          <p>
            Partner with us for AI-first custom software development, next-generation mobile apps,
            and precision web solutions that scale your business beyond expectations.
            We turn ambitious visions into market-leading realities.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="cta-button primary">
              Get Started
              <span className="arrow">→</span>
            </Link>
            <Link to="/projects" className="cta-button secondary">
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Our Comprehensive Services Section */}
      <section className="main-services-section container">
        <h2 className="section-title">Our Comprehensive Services</h2>

        {/* AI Services */}
        <motion.div
          className="service-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3>AI Development & Consulting</h3>
          <div className="services-grid">
            <div className="service-card glass-card">
              <h4>AI Consulting</h4>
              <p>Transform confusion into clarity, turning your boldest visions into actionable roadmaps for AI integration.</p>
            </div>
            <div className="service-card glass-card">
              <h4>AI Software Development</h4>
              <p>Custom-built AI solutions that evolve, learn, and deliver measurable results tailored to your unique needs.</p>
            </div>
            <div className="service-card glass-card">
              <h4>Generative AI Development</h4>
              <p>Unleash unprecedented innovation, creating captivating content and astounding creative assets with AI.</p>
            </div>
            <div className="service-card glass-card">
              <h4>AI Agent Development</h4>
              <p>Intelligent digital workforce members that automate complex tasks while maintaining the human touch.</p>
            </div>
            <div className="service-card glass-card">
              <h4>ChatGPT Development</h4>
              <p>Custom conversational AI that speaks your brand's language fluently, enhancing user interaction.</p>
            </div>
            <div className="service-card glass-card">
              <h4>LLM Development</h4>
              <p>AI that truly comprehends your industry's language, integrating seamlessly into your specific workflow.</p>
            </div>
            <div className="service-card glass-card">
              <h4>AI Integration</h4>
              <p>Seamlessly incorporate AI technologies into existing systems to improve efficiency and decision-making processes.</p>
            </div>
            <div className="service-card glass-card">
              <h4>Healthcare AI Consulting</h4>
              <p>Expert advice on implementing AI solutions to streamline healthcare operations and improve patient outcomes.</p>
            </div>
            <div className="service-card glass-card">
              <h4>Machine Learning Development</h4>
              <p>Building predictive models and intelligent algorithms to drive data-driven decision-making.</p>
            </div>
            <div className="service-card glass-card">
              <h4>Computer Vision Services</h4>
              <p>Leverage advanced image and video analysis to automate visual data processing and extract actionable insights.</p>
            </div>
          </div>
        </motion.div>

        {/* Web Development Services */}
        <motion.div
          className="service-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3>Web Development Solutions</h3>
          <div className="services-grid">
            <div className="service-card glass-card">
              <h4>Website Development</h4>
              <p>Crafting digital symphonies that sing your brand's story, meticulously engineered for lasting impressions.</p>
            </div>
            <div className="service-card glass-card">
              <h4>Website Maintenance</h4>
              <p>Dedicated digital guardians ensuring your online presence stays fresh, secure, and performing at peak efficiency.</p>
            </div>
            <div className="service-card glass-card">
              <h4>Website Performance</h4>
              <p>Optimizing every millisecond for blazing-fast digital experiences that convert visitors into loyal customers.</p>
            </div>
            <div className="service-card glass-card">
              <h4>CMS Development</h4>
              <p>Bespoke CMS solutions putting you in complete control of your digital content, making updates effortless.</p>
            </div>
          </div>
        </motion.div>

        {/* Mobile App Development Services */}
        <motion.div
          className="service-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3>Mobile App Development</h3>
          <div className="services-grid">
            <div className="service-card glass-card">
              <h4>Mobile App Development</h4>
              <p>Crafting stunning cross-platform applications with Flutter that feel native on every device, loved by users.</p>
            </div>
            <div className="service-card glass-card">
              <h4>MVP Development</h4>
              <p>Building lean, powerful MVPs that validate your vision, capture early adopters, and provide a perfect foundation.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-stack-section container">
        <h2 className="section-title">Our Technology Stack</h2>
        <div className="tech-categories">
          <motion.div
            className="tech-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Front-End Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </motion.div>
          <motion.div
            className="tech-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3>Back-End Development</h3>
            <ul>
              <li>PHP</li>
              <li>Python</li>
              <li>Java</li>
              <li>Node.js</li>
              <li>Go Lang</li>
              <li>Ruby</li>
            </ul>
          </motion.div>
          <motion.div
            className="tech-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3>Database Solutions</h3>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
            </ul>
          </motion.div>
          <motion.div
            className="tech-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3>Cloud Infrastructure</h3>
            <ul>
              <li>Google Cloud Platform</li>
              <li>AWS</li>
              <li>Microsoft Azure</li>
            </ul>
          </motion.div>
          <motion.div
            className="tech-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3>DevOps & Automation</h3>
            <ul>
              <li>Ansible</li>
              <li>GitHub Actions</li>
              <li>Docker</li>
              <li>Jenkins</li>
              <li>Kubernetes</li>
              <li>Terraform</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Industries We Transform Section */}
      <section className="industries-section container">
        <h2 className="section-title">Industries We Passionately Transform</h2>
        <div className="industries-grid">
          <motion.div
            className="industry-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h4>Healthcare and Fitness</h4>
          </motion.div>
          <motion.div
            className="industry-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4>Warehouse and Logistics</h4>
          </motion.div>
          <motion.div
            className="industry-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4>Travel and Hospitality</h4>
          </motion.div>
          <motion.div
            className="industry-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4>Education and eLearning</h4>
          </motion.div>
          <motion.div
            className="industry-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4>Marketplace</h4>
          </motion.div>
          <motion.div
            className="industry-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h4>Media and Entertainment</h4>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="services-cta">
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Experience the AI Revolution?</h2>
          <p>Share your idea with us and get a free consultation from our artificial intelligence experts. We tailor solutions to help you remain competitive, efficient, and profitable.</p>
          <Link to="/contact" className="cta-button primary">
            Book Your Free Discovery Call
            <span className="arrow">→</span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Services; 