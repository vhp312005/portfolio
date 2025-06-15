import { Link } from 'react-router-dom';
import '../components/Projects.css';

const ProjectsPage = () => {
  const projects = [
    {
      id: 'smartclinic-ai',
      title: 'SmartClinic.AI',
      subtitle: 'Multimodal Medical Assistant for Clinics',
      domain: 'Healthcare',
      type: 'B2B SaaS',
      tech: ['GenAI', 'OCR', 'LLM', 'Vision Models'],
      description: 'An AI-powered medical assistant that streamlines clinic operations through multimodal input processing and intelligent automation.',
      stats: [
        { label: 'Avg. Response Time', value: '2s' },
        { label: 'Accuracy Rate', value: '95%' },
        { label: 'Time Saved', value: '40%' }
      ],
      image: 'https://placehold.co/600x400/1a2234/60a5fa?text=SmartClinic.AI'
    },
    {
      id: 'autobrander-ai',
      title: 'AutoBrander.AI',
      subtitle: 'AI-Powered Branding Assistant for Startups',
      domain: 'Marketing',
      type: 'GenAI SaaS',
      tech: ['LLMs', 'Vision Generation', 'Text Generation'],
      description: 'An intelligent branding assistant that generates complete brand kits for startups using advanced AI models.',
      stats: [
        { label: 'Generation Time', value: '30s' },
        { label: 'Brand Kits Created', value: '500+' },
        { label: 'Client Satisfaction', value: '92%' }
      ],
      image: 'https://placehold.co/600x400/1a2234/60a5fa?text=AutoBrander.AI'
    },
    {
      id: 'smartsurveil',
      title: 'SmartSurveil',
      subtitle: 'AI-Powered Real-Time Surveillance & Intrusion Detection',
      domain: 'Security / IoT',
      type: 'Real-Time App',
      tech: ['Computer Vision', 'Object Tracking', 'Anomaly Detection'],
      description: 'A proactive surveillance system that uses AI to detect and report security threats in real-time.',
      stats: [
        { label: 'Detection Rate', value: '98%' },
        { label: 'False Alarms', value: '<1%' },
        { label: 'Response Time', value: '<5s' }
      ],
      image: 'https://placehold.co/600x400/1a2234/60a5fa?text=SmartSurveil'
    },
    {
      id: 'nutrigenie',
      title: 'NutriGenie',
      subtitle: 'Personalized Nutrition Planner from Food Images & Preferences',
      domain: 'Health & Wellness',
      type: 'Mobile/Web App',
      tech: ['CV', 'GenAI', 'NLP', 'Multimodal Fusion'],
      description: 'An AI-powered nutrition assistant that provides personalized meal plans based on food images and user preferences.',
      stats: [
        { label: 'Food Recognition', value: '99%' },
        { label: 'User Retention', value: '85%' },
        { label: 'Meal Plans Generated', value: '10k+' }
      ],
      image: 'https://placehold.co/600x400/1a2234/60a5fa?text=NutriGenie'
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p className="projects-intro">
          Explore my portfolio of AI and machine learning projects that showcase expertise in 
          various domains including healthcare, marketing, security, and wellness.
        </p>
      </div>
      
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
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
                <p className="project-description">{project.description}</p>
                <div className="project-stats">
                  {project.stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 