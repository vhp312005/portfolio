import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-breadcrumb">
            <span>Portfolio</span>
            <span className="separator">/</span>
            <span>Case Study</span>
          </div>
          <h1 className="hero-title">
            Building Intelligent Solutions with
            <span className="highlight"> Modern Technology</span>
          </h1>
          <p className="hero-description">
            A showcase of innovative projects and solutions that demonstrate expertise in AI, 
            Machine Learning, and Full Stack Development. Transforming ideas into impactful digital experiences.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn secondary-btn">Let's Talk</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="/profile.jpg" alt="Profile" className="profile-image" />
            <div className="experience-badge">
              <span>3+</span>
              <span>Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 