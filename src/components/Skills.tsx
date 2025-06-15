import React from 'react'
import './Skills.css'

const Skills = () => {
  const skills = [
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Building and deploying custom AI models for NLP, Computer Vision, and Generative AI applications.",
      tags: ["LLMs", "NLP", "Computer Vision", "Deep Learning", "MLOps"]
    },
    {
      icon: "⚡",
      title: "AI Solutions & Integration",
      description: "Developing end-to-end AI solutions with scalable architecture and seamless integration.",
      tags: ["LangChain", "FastAPI", "Docker", "AWS/GCP", "CI/CD"]
    },
    {
      icon: "🎯",
      title: "AI Consulting & Strategy",
      description: "Helping businesses leverage AI to automate operations and enhance customer experiences.",
      tags: ["AI Strategy", "RPA", "Chatbots", "Data Pipelines", "Model Deployment"]
    }
  ];

  const techStack = [
    {
      category: "AI & ML Frameworks",
      items: ["PyTorch", "TensorFlow", "HuggingFace", "OpenAI", "LangChain"]
    },
    {
      category: "Computer Vision",
      items: ["YOLO", "Detectron2", "MediaPipe", "OpenCV", "Custom Models"]
    },
    {
      category: "Development & Infrastructure",
      items: ["Python", "FastAPI", "Docker", "AWS/GCP", "Git"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">AI Services & Expertise</h2>
        <p className="section-description">
          Transforming businesses through cutting-edge AI solutions. From custom model development 
          to end-to-end AI integration, we help companies leverage artificial intelligence to drive growth and innovation.
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.title} 
              className="skill-card"
              style={{ "--card-index": index } as React.CSSProperties}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
              <ul className="skill-list">
                {skill.tags.map(tag => (
                  <li key={tag}>
                    <span className="skill-tag">{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="tech-stack-section">
          <h2 className="section-title">Our Tech Stack</h2>
          <div className="tech-stack-grid">
            {techStack.map((stack, index) => (
              <div 
                key={stack.category} 
                className="tech-stack-card"
                style={{ "--card-index": index + 3 } as React.CSSProperties}
              >
                <h4 className="tech-stack-category">{stack.category}</h4>
                <ul className="tech-stack-list">
                  {stack.items.map(item => (
                    <li key={item} className="tech-stack-item">
                      <span className="tech-stack-tag">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 