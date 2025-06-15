import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconArrowLeft, IconExternalLink, IconBrandGithub, IconPlayerPlay } from '@tabler/icons-react';
import '../styles/CaseStudy.css';

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Case study data based on project ID
  const caseStudies = {
    'smartclinic-ai': {
      title: 'SmartClinic.AI',
      subtitle: 'Multimodal Medical Assistant for Clinics',
      domain: 'Healthcare',
      type: 'B2B SaaS',
      duration: '6 months',
      team: '4 developers, 2 AI specialists, 1 UI/UX designer',
      overview: 'An AI-powered medical assistant that streamlines clinic operations through multimodal input processing and intelligent automation. The system helps healthcare providers reduce administrative burden and improve patient care.',
      challenge: 'Healthcare clinics were struggling with overwhelming administrative tasks, leading to longer patient wait times and reduced efficiency. Manual data entry and documentation were consuming 40% of healthcare providers\' time.',
      solution: 'Developed a comprehensive AI system that processes multiple input types (text, voice, images) to automate patient documentation, appointment scheduling, and preliminary diagnosis assistance. The system integrates seamlessly with existing clinic management software.',
      technologies: {
        'AI/ML': ['TensorFlow', 'PyTorch', 'OpenAI GPT-4', 'Computer Vision Models'],
        'Backend': ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
        'Frontend': ['React', 'TypeScript', 'Tailwind CSS'],
        'Infrastructure': ['AWS', 'Docker', 'Kubernetes', 'Nginx']
      },
      features: [
        'Multimodal input processing (text, voice, images)',
        'Automated patient documentation',
        'Intelligent appointment scheduling',
        'Preliminary diagnosis assistance',
        'Integration with existing clinic systems',
        'Real-time data synchronization',
        'HIPAA-compliant security measures'
      ],
      results: [
        { metric: 'Response Time', value: '2s', improvement: '60% faster than manual entry' },
        { metric: 'Accuracy Rate', value: '95%', improvement: 'Reduced errors by 80%' },
        { metric: 'Time Saved', value: '40%', improvement: 'More time for patient care' },
        { metric: 'User Adoption', value: '92%', improvement: 'High satisfaction rate' }
      ],
      image: 'https://placehold.co/800x400/1a2234/60a5fa?text=SmartClinic.AI',
      demoUrl: '#',
      githubUrl: '#'
    },
    'autobrander-ai': {
      title: 'AutoBrander.AI',
      subtitle: 'AI-Powered Branding Assistant for Startups',
      domain: 'Marketing',
      type: 'GenAI SaaS',
      duration: '4 months',
      team: '3 developers, 2 AI specialists, 1 designer',
      overview: 'An intelligent branding assistant that generates complete brand kits for startups using advanced AI models. The platform creates logos, color palettes, typography, and brand guidelines automatically.',
      challenge: 'Startups often lack the budget and expertise to create professional branding. Traditional branding services are expensive and time-consuming, while DIY tools produce generic results.',
      solution: 'Built an AI-powered platform that analyzes business context and generates unique, professional brand identities. The system uses advanced generative AI to create cohesive brand elements that reflect the company\'s values and target audience.',
      technologies: {
        'AI/ML': ['OpenAI DALL-E', 'Stable Diffusion', 'GPT-4', 'Custom Vision Models'],
        'Backend': ['Node.js', 'Express', 'MongoDB', 'Redis'],
        'Frontend': ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
        'Infrastructure': ['Vercel', 'AWS S3', 'CloudFlare', 'Stripe']
      },
      features: [
        'AI-generated logo creation',
        'Brand color palette generation',
        'Typography selection and pairing',
        'Brand guideline generation',
        'Multiple style variations',
        'Export in multiple formats',
        'Brand consistency checker'
      ],
      results: [
        { metric: 'Generation Time', value: '30s', improvement: '95% faster than traditional methods' },
        { metric: 'Brand Kits Created', value: '500+', improvement: 'Serving 200+ startups' },
        { metric: 'Client Satisfaction', value: '92%', improvement: 'High quality ratings' },
        { metric: 'Cost Savings', value: '90%', improvement: 'vs traditional branding' }
      ],
      image: 'https://placehold.co/800x400/1a2234/60a5fa?text=AutoBrander.AI',
      demoUrl: '#',
      githubUrl: '#'
    },
    'smartsurveil': {
      title: 'SmartSurveil',
      subtitle: 'AI-Powered Real-Time Surveillance & Intrusion Detection',
      domain: 'Security / IoT',
      type: 'Real-Time App',
      duration: '8 months',
      team: '5 developers, 3 AI specialists, 1 security expert',
      overview: 'A proactive surveillance system that uses AI to detect and report security threats in real-time. The system analyzes video feeds to identify suspicious activities and provides instant alerts.',
      challenge: 'Traditional surveillance systems generate too many false alarms and require constant human monitoring. Security personnel were overwhelmed with alerts, leading to missed actual threats.',
      solution: 'Developed an AI-powered surveillance system that uses computer vision and machine learning to accurately detect security threats. The system reduces false positives and provides intelligent threat assessment.',
      technologies: {
        'AI/ML': ['TensorFlow', 'YOLO', 'OpenCV', 'Custom Detection Models'],
        'Backend': ['Python', 'Django', 'PostgreSQL', 'Celery'],
        'Frontend': ['React', 'WebRTC', 'Socket.io', 'Material-UI'],
        'Infrastructure': ['AWS', 'Docker', 'Kubernetes', 'NVIDIA GPUs']
      },
      features: [
        'Real-time threat detection',
        'Object tracking and identification',
        'Anomaly detection algorithms',
        'Intelligent alert system',
        'Mobile app for remote monitoring',
        'Cloud-based video storage',
        'Multi-camera support'
      ],
      results: [
        { metric: 'Detection Rate', value: '98%', improvement: 'Superior to human monitoring' },
        { metric: 'False Alarms', value: '<1%', improvement: '95% reduction in false positives' },
        { metric: 'Response Time', value: '<5s', improvement: 'Immediate threat notification' },
        { metric: 'Cost Savings', value: '70%', improvement: 'vs traditional security systems' }
      ],
      image: 'https://placehold.co/800x400/1a2234/60a5fa?text=SmartSurveil',
      demoUrl: '#',
      githubUrl: '#'
    },
    'nutrigenie': {
      title: 'NutriGenie',
      subtitle: 'Personalized Nutrition Planner from Food Images & Preferences',
      domain: 'Health & Wellness',
      type: 'Mobile/Web App',
      duration: '5 months',
      team: '4 developers, 2 AI specialists, 1 nutritionist',
      overview: 'An AI-powered nutrition assistant that provides personalized meal plans based on food images and user preferences. The app helps users make healthier food choices and achieve their nutrition goals.',
      challenge: 'People struggle to maintain healthy eating habits due to lack of knowledge about nutrition and difficulty in tracking their food intake. Manual food logging is tedious and often inaccurate.',
      solution: 'Created an AI-powered nutrition app that uses computer vision to identify food from photos and provides personalized nutrition advice. The system learns user preferences and dietary restrictions to offer tailored recommendations.',
      technologies: {
        'AI/ML': ['TensorFlow', 'Computer Vision', 'NLP', 'Recommendation Systems'],
        'Backend': ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
        'Frontend': ['React Native', 'Expo', 'TypeScript', 'Native Base'],
        'Infrastructure': ['AWS', 'Firebase', 'Cloud Vision API', 'App Store/Play Store']
      },
      features: [
        'Food recognition from photos',
        'Nutritional analysis',
        'Personalized meal planning',
        'Dietary restriction support',
        'Progress tracking',
        'Recipe recommendations',
        'Social sharing features'
      ],
      results: [
        { metric: 'Food Recognition', value: '99%', improvement: 'Highly accurate identification' },
        { metric: 'User Retention', value: '85%', improvement: 'Strong user engagement' },
        { metric: 'Meal Plans Generated', value: '10k+', improvement: 'Serving thousands of users' },
        { metric: 'Health Improvements', value: '78%', improvement: 'Users report better health' }
      ],
      image: 'https://placehold.co/800x400/1a2234/60a5fa?text=NutriGenie',
      demoUrl: '#',
      githubUrl: '#'
    }
  };

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="case-study-page">
        <div className="container">
          <div className="not-found">
            <h1>Case Study Not Found</h1>
            <p>The requested case study could not be found.</p>
            <Link to="/projects" className="cta-button primary">
              <IconArrowLeft size={16} />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      {/* Hero Section */}
      <section className="case-study-hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/projects" className="back-link">
            <IconArrowLeft size={16} />
            Back to Projects
          </Link>
          
          <span className="tag">{caseStudy.domain}</span>
          
          <h1 className="hero-title">
            {caseStudy.title}
          </h1>
          
          <p className="hero-subtitle">
            {caseStudy.subtitle}
          </p>
          
          <div className="project-meta">
            <div className="meta-item">
              <strong>Duration:</strong> {caseStudy.duration}
            </div>
            <div className="meta-item">
              <strong>Team:</strong> {caseStudy.team}
            </div>
            <div className="meta-item">
              <strong>Type:</strong> {caseStudy.type}
            </div>
          </div>
          
          <div className="hero-cta">
            <a href={caseStudy.demoUrl} className="cta-button primary" target="_blank" rel="noopener noreferrer">
              <IconPlayerPlay size={16} />
              View Demo
            </a>
            <a href={caseStudy.githubUrl} className="cta-button secondary" target="_blank" rel="noopener noreferrer">
              <IconBrandGithub size={16} />
              View Code
            </a>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Project Overview</h2>
            <p className="overview-text">{caseStudy.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="challenge-solution-section">
        <div className="container">
          <div className="challenge-solution-grid">
            <motion.div 
              className="challenge-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">🎯</div>
              <h3>The Challenge</h3>
              <p>{caseStudy.challenge}</p>
            </motion.div>
            
            <motion.div 
              className="solution-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">💡</div>
              <h3>Our Solution</h3>
              <p>{caseStudy.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Technologies Used</h2>
            <div className="technologies-grid">
              {Object.entries(caseStudy.technologies).map(([category, techs], index) => (
                <motion.div 
                  key={category}
                  className="tech-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3>{category}</h3>
                  <ul>
                    {techs.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Key Features</h2>
            <div className="features-grid">
              {caseStudy.features.map((feature, index) => (
                <motion.div 
                  key={feature}
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="feature-icon">✓</div>
                  <p>{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Results & Impact</h2>
            <div className="results-grid">
              {caseStudy.results.map((result, index) => (
                <motion.div 
                  key={result.metric}
                  className="result-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="result-icon">📈</div>
                  <div className="result-details">
                    <h3>{result.metric}</h3>
                    <p>{result.value}</p>
                    <div className="improvement">{result.improvement}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how AI can automate, elevate, and scale your operations.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Get a Free Strategy Call
                <span className="arrow">→</span>
              </Link>
              <Link to="/projects" className="cta-button secondary">
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy; 