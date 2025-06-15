import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const featuredProjects = [
    {
      id: 'smartclinic-ai',
      title: 'SmartClinic.AI',
      subtitle: 'Multimodal Medical Assistant for Clinics',
      domain: 'Healthcare',
      type: 'B2B SaaS',
      image: 'https://placehold.co/600x400/1a2234/60a5fa?text=SmartClinic.AI'
    },
    {
      id: 'autobrander-ai',
      title: 'AutoBrander.AI',
      subtitle: 'AI-Powered Branding Assistant for Startups',
      domain: 'Marketing',
      type: 'GenAI SaaS',
      image: 'https://placehold.co/600x400/1a2234/60a5fa?text=AutoBrander.AI'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-description">
          A showcase of innovative AI solutions that demonstrate expertise in machine learning, 
          computer vision, and natural language processing.
        </p>
        
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <Link to={`/case-study/${project.id}`} key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <span className="view-case-study">View Case Study</span>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <div className="project-meta">
                  <span className="project-domain">{project.domain}</span>
                  <span className="project-type">{project.type}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="view-all-projects">
          <Link to="/projects" className="view-all-button">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects; 