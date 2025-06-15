import React from 'react';
import './Services.css';
import { FaRobot, FaCogs, FaChartLine, FaHeadset, FaMicrochip, FaCloud } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'AI Agents & Smart Assistants',
    description: 'Autonomous systems that perform tasks—chatbots, virtual assistants, workflow bots',
    icon: <FaRobot />,
    features: [
      'Intelligent chatbots',
      'Virtual assistants',
      'Workflow automation bots',
      'Natural language processing'
    ]
  },
  {
    id: 2,
    title: 'Workflow / Hyperautomation',
    description: 'End-to-end business process automation combining RPA with GenAI',
    icon: <FaCogs />,
    features: [
      'Process automation',
      'RPA integration',
      'GenAI-powered workflows',
      'Business process optimization'
    ]
  },
  {
    id: 3,
    title: 'Predictive Analytics & Insights',
    description: 'Data-driven forecasting, trend detection, and decision support systems',
    icon: <FaChartLine />,
    features: [
      'Trend analysis',
      'Forecasting models',
      'Decision support',
      'Data visualization'
    ]
  },
  {
    id: 4,
    title: 'Customer Experience AI',
    description: '24/7 personalized support, retrieval bots, sentiment analysis',
    icon: <FaHeadset />,
    features: [
      '24/7 customer support',
      'Sentiment analysis',
      'Personalized interactions',
      'Customer journey optimization'
    ]
  },
  {
    id: 5,
    title: 'Edge & IoT AI',
    description: 'On-device inference for low-latency ops (e.g., factories, retail sensors)',
    icon: <FaMicrochip />,
    features: [
      'Edge computing',
      'IoT integration',
      'Real-time processing',
      'Low-latency inference'
    ]
  },
  {
    id: 6,
    title: 'AIaaS / Platform Integration',
    description: 'Turnkey AI services (ML, CV, speech) via cloud platforms',
    icon: <FaCloud />,
    features: [
      'Cloud AI services',
      'ML model deployment',
      'Computer vision solutions',
      'Speech recognition'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title">AI Services</h2>
        <p className="section-description">
          Empowering businesses with cutting-edge AI solutions across various domains
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-cta">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 