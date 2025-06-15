import { useParams, Link } from 'react-router-dom';
import './CaseStudy.css';

const CaseStudy = () => {
  const { id } = useParams();
  
  const caseStudies = {
    'smartclinic-ai': {
      title: 'SmartClinic.AI',
      subtitle: 'Multimodal Medical Assistant for Clinics',
      domain: 'Healthcare',
      type: 'B2B SaaS',
      tech: ['GenAI', 'OCR', 'LLM', 'Vision Models'],
      overview: {
        description: 'SmartClinic.AI is an innovative medical assistant that revolutionizes clinic operations through advanced AI technology. It processes multimodal inputs including handwritten prescriptions, voice queries, and text to automate patient record management and improve healthcare delivery.',
        stats: [
          { label: 'Avg. Response Time', value: '2s' },
          { label: 'Accuracy Rate', value: '95%' },
          { label: 'Time Saved', value: '40%' }
        ]
      },
      challenges: [
        {
          title: 'Platform Fragmentation',
          description: 'Clinics often use multiple disconnected systems for patient records, prescriptions, and communication, making it difficult to maintain a unified view of patient data.'
        },
        {
          title: 'Manual Data Entry',
          description: 'Staff spent significant time manually transcribing handwritten prescriptions and patient notes, leading to errors and inefficiencies.'
        },
        {
          title: 'Patient Query Management',
          description: 'Handling repetitive patient queries about medications, appointments, and follow-ups consumed valuable staff time.'
        }
      ],
      solution: {
        description: 'SmartClinic.AI integrates multiple AI technologies to create a seamless, intelligent medical assistant that streamlines clinic operations.',
        features: [
          {
            title: 'Image Processing',
            description: 'Advanced OCR and Vision Transformer models extract and digitize information from handwritten prescriptions with high accuracy.'
          },
          {
            title: 'Voice Intelligence',
            description: 'Whisper-based transcription combined with medical LLM for accurate symptom extraction and patient query understanding.'
          },
          {
            title: 'Intelligent Chat',
            description: 'Fine-tuned LLaMA model with retrieval-based QA system for accurate medical information and patient history access.'
          },
          {
            title: 'Doctor Dashboard',
            description: 'React-based interface for doctors to review AI-suggested diagnoses, manage patient records, and monitor clinic operations.'
          }
        ]
      },
      technologies: [
        {
          category: 'AI/ML',
          tools: ['OpenAI Whisper', 'YOLOv8', 'Tesseract', 'HuggingFace Transformers', 'LangChain']
        },
        {
          category: 'Backend',
          tools: ['FastAPI', 'MongoDB', 'Pinecone']
        },
        {
          category: 'Frontend',
          tools: ['React', 'Streamlit', 'TailwindCSS']
        }
      ],
      results: [
        {
          metric: 'Prescription Processing',
          value: '90%',
          description: 'Reduction in time spent on manual prescription entry'
        },
        {
          metric: 'Query Resolution',
          value: '85%',
          description: 'Of patient queries handled automatically'
        },
        {
          metric: 'Staff Efficiency',
          value: '40%',
          description: 'Increase in staff productivity'
        }
      ]
    },
    'autobrander-ai': {
      title: 'AutoBrander.AI',
      subtitle: 'AI-Powered Branding Assistant for Startups',
      domain: 'Marketing',
      type: 'GenAI SaaS',
      tech: ['LLMs', 'Vision Generation', 'Text Generation'],
      overview: {
        description: 'AutoBrander.AI is an innovative branding assistant that helps startups quickly generate professional branding materials using advanced AI technology. It transforms basic business ideas into complete brand kits, including names, taglines, logos, and visual assets.',
        stats: [
          { label: 'Generation Time', value: '30s' },
          { label: 'Brand Kits Created', value: '500+' },
          { label: 'Client Satisfaction', value: '92%' }
        ]
      },
      challenges: [
        {
          title: 'Resource Constraints',
          description: 'Early-stage startups often lack the budget and time to hire professional designers and marketers for branding.'
        },
        {
          title: 'Brand Consistency',
          description: 'Maintaining visual and messaging consistency across different branding elements is challenging without professional guidance.'
        },
        {
          title: 'Quick Iteration',
          description: 'Startups need to rapidly iterate on branding ideas but traditional design processes are slow and expensive.'
        }
      ],
      solution: {
        description: 'AutoBrander.AI leverages multiple AI models to create cohesive, professional branding materials in minutes.',
        features: [
          {
            title: 'Intelligent Naming',
            description: 'LLaMA2 model generates unique, memorable business names and taglines based on business descriptions.'
          },
          {
            title: 'Visual Generation',
            description: 'DALL·E and Stable Diffusion create custom logos and social media visuals that match brand identity.'
          },
          {
            title: 'Brand Consistency',
            description: 'Vision Transformer ensures visual consistency across all generated assets and brand colors.'
          },
          {
            title: 'Voice Input',
            description: 'Whisper-based voice transcription allows users to describe their business idea naturally.'
          }
        ]
      },
      technologies: [
        {
          category: 'AI/ML',
          tools: ['OpenAI GPT-4', 'Stable Diffusion', 'LangChain', 'CLIP']
        },
        {
          category: 'Backend',
          tools: ['FastAPI', 'Firebase']
        },
        {
          category: 'Frontend',
          tools: ['React', 'TailwindCSS']
        }
      ],
      results: [
        {
          metric: 'Time Saved',
          value: '95%',
          description: 'Reduction in branding development time'
        },
        {
          metric: 'Cost Savings',
          value: '$5k+',
          description: 'Average savings per startup'
        },
        {
          metric: 'Brand Quality',
          value: '90%',
          description: 'Of generated brands meet professional standards'
        }
      ]
    },
    'smartsurveil': {
      title: 'SmartSurveil',
      subtitle: 'AI-Powered Real-Time Surveillance & Intrusion Detection',
      domain: 'Security / IoT',
      type: 'Real-Time App',
      tech: ['Computer Vision', 'Object Tracking', 'Anomaly Detection'],
      overview: {
        description: 'SmartSurveil is a proactive surveillance system that uses advanced AI to detect and report security threats in real-time. It combines computer vision, object tracking, and anomaly detection to provide intelligent security monitoring.',
        stats: [
          { label: 'Detection Rate', value: '98%' },
          { label: 'False Alarms', value: '<1%' },
          { label: 'Response Time', value: '<5s' }
        ]
      },
      challenges: [
        {
          title: 'Reactive Systems',
          description: 'Traditional surveillance systems only record footage, requiring manual review and often missing critical events.'
        },
        {
          title: 'False Alarms',
          description: 'Conventional motion detection triggers too many false alarms, leading to alert fatigue.'
        },
        {
          title: 'Event Summarization',
          description: 'Security staff struggle to quickly understand and respond to security incidents from raw video footage.'
        }
      ],
      solution: {
        description: 'SmartSurveil implements a comprehensive AI-powered security solution that proactively monitors and reports security threats.',
        features: [
          {
            title: 'Real-time Detection',
            description: 'YOLOv8 and DeepSort for accurate object detection and tracking of people and vehicles.'
          },
          {
            title: 'Face Recognition',
            description: 'FaceNet integration for identifying known and unknown individuals from access databases.'
          },
          {
            title: 'Behavior Analysis',
            description: 'Custom algorithms detect suspicious behavior patterns like loitering or unauthorized access attempts.'
          },
          {
            title: 'AI Reporting',
            description: 'LLM-powered system generates natural language reports of security incidents and daily summaries.'
          }
        ]
      },
      technologies: [
        {
          category: 'AI/ML',
          tools: ['YOLOv8', 'DeepSort', 'OpenAI GPT', 'FaceNet']
        },
        {
          category: 'Backend',
          tools: ['FFmpeg', 'Twilio', 'Firebase']
        },
        {
          category: 'Frontend',
          tools: ['Streamlit', 'Text-to-Speech']
        }
      ],
      results: [
        {
          metric: 'Threat Detection',
          value: '98%',
          description: 'Accuracy in detecting security threats'
        },
        {
          metric: 'Response Time',
          value: '5s',
          description: 'Average time to alert security staff'
        },
        {
          metric: 'Cost Reduction',
          value: '60%',
          description: 'Reduction in security staffing needs'
        }
      ]
    },
    'nutrigenie': {
      title: 'NutriGenie',
      subtitle: 'Personalized Nutrition Planner from Food Images & Preferences',
      domain: 'Health & Wellness',
      type: 'Mobile/Web App',
      tech: ['CV', 'GenAI', 'NLP', 'Multimodal Fusion'],
      overview: {
        description: 'NutriGenie is an AI-powered nutrition assistant that helps users maintain healthy eating habits through personalized meal planning and automated food tracking. It uses computer vision and natural language processing to understand user preferences and provide tailored recommendations.',
        stats: [
          { label: 'Food Recognition', value: '99%' },
          { label: 'User Retention', value: '85%' },
          { label: 'Meal Plans Generated', value: '10k+' }
        ]
      },
      challenges: [
        {
          title: 'Diet Adherence',
          description: 'Users struggle to maintain consistent diets due to lack of personalized guidance and meal tracking.'
        },
        {
          title: 'Food Logging',
          description: 'Manual food logging is time-consuming and often inaccurate, leading to poor tracking compliance.'
        },
        {
          title: 'Personalization',
          description: 'Generic meal plans fail to account for individual preferences, dietary restrictions, and goals.'
        }
      ],
      solution: {
        description: 'NutriGenie combines multiple AI technologies to create a seamless, personalized nutrition experience.',
        features: [
          {
            title: 'Visual Recognition',
            description: 'EfficientNet model accurately identifies food items and portions from plate images.'
          },
          {
            title: 'Voice Input',
            description: 'Whisper and LLM integration for natural language food logging and preference expression.'
          },
          {
            title: 'Smart Planning',
            description: 'GPT-4 fine-tuned on nutrition data generates personalized meal plans based on user preferences.'
          },
          {
            title: 'Multimodal Interface',
            description: 'Unified platform supporting image, voice, and text input for flexible user interaction.'
          }
        ]
      },
      technologies: [
        {
          category: 'AI/ML',
          tools: ['EfficientNet', 'OpenAI Whisper', 'GPT-4', 'LangChain']
        },
        {
          category: 'Backend',
          tools: ['Firebase', 'MongoDB', 'Nutritionix API']
        },
        {
          category: 'Frontend',
          tools: ['React Native']
        }
      ],
      results: [
        {
          metric: 'User Engagement',
          value: '85%',
          description: 'Monthly active user retention rate'
        },
        {
          metric: 'Diet Adherence',
          value: '70%',
          description: 'Of users report better diet adherence'
        },
        {
          metric: 'Time Saved',
          value: '15min',
          description: 'Daily time saved on meal planning'
        }
      ]
    }
  };

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="case-study-not-found">
        <h1>Case Study Not Found</h1>
        <p>The requested case study could not be found.</p>
        <Link to="/" className="btn primary-btn">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="case-study">
      <div className="case-study-header">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/#projects">Projects</Link>
          <span className="separator">/</span>
          <span>{caseStudy.title}</span>
        </div>
        <h1 className="case-study-title">{caseStudy.title}</h1>
        <p className="case-study-subtitle">{caseStudy.subtitle}</p>
        <div className="case-study-meta">
          <span className="domain">{caseStudy.domain}</span>
          <span className="type">{caseStudy.type}</span>
        </div>
      </div>

      <div className="case-study-content">
        <section className="overview-section">
          <h2>Project Overview</h2>
          <p>{caseStudy.overview.description}</p>
          <div className="stats-grid">
            {caseStudy.overview.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="challenges-section">
          <h2>Business Challenges</h2>
          <div className="challenges-grid">
            {caseStudy.challenges.map((challenge, index) => (
              <div key={index} className="challenge-card">
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="solution-section">
          <h2>The Solution</h2>
          <p>{caseStudy.solution.description}</p>
          <div className="features-grid">
            {caseStudy.solution.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="technologies-section">
          <h2>Technologies Used</h2>
          <div className="tech-grid">
            {caseStudy.technologies.map((tech, index) => (
              <div key={index} className="tech-category">
                <h3>{tech.category}</h3>
                <ul>
                  {tech.tools.map((tool, toolIndex) => (
                    <li key={toolIndex}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="results-section">
          <h2>Results & Impact</h2>
          <div className="results-grid">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="result-card">
                <span className="result-value">{result.value}</span>
                <h3>{result.metric}</h3>
                <p>{result.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="case-study-footer">
        <Link to="/projects" className="btn secondary-btn">Back to Projects</Link>
        <Link to="/contact" className="btn primary-btn">Start a Project</Link>
      </div>
    </div>
  );
};

export default CaseStudy; 