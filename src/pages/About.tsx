import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FaPlay, FaPause, FaQuoteLeft } from "react-icons/fa";
import '../styles/About.css';

// Testimonial type definition
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  audioUrl?: string;
  imageUrl: string;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    text: "Working with this team transformed our AI capabilities. They didn't just implement solutions; they became true partners in our digital transformation journey.",
    audioUrl: "/testimonials/sarah-chen.mp3",
    imageUrl: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Head of Innovation",
    company: "FutureTech Labs",
    text: "The level of expertise and attention to detail is remarkable. They helped us scale our ML infrastructure in ways we never thought possible.",
    audioUrl: "/testimonials/michael-rodriguez.mp3",
    imageUrl: "/testimonials/michael.jpg"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Product Director",
    company: "DataSphere",
    text: "What impressed me most was their ability to translate complex AI concepts into actionable business solutions. They're not just engineers; they're strategic partners.",
    audioUrl: "/testimonials/priya-patel.mp3",
    imageUrl: "/testimonials/priya.jpg"
  },
  {
    id: 4,
    name: "David Kim",
    role: "AI Lead",
    company: "SmartSystems Inc",
    text: "The team's approach to problem-solving is unique. They don't just build models; they build sustainable, scalable AI systems that drive real business value.",
    audioUrl: "/testimonials/david-kim.mp3",
    imageUrl: "/testimonials/david.jpg"
  }
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const processRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const isTestimonialsInView = useInView(testimonialsRef, { once: false, amount: 0.3 });

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isVisionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 });

  // Parallax effect for hero section
  // const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]); // Removed to test for blur
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const processStepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      x: 20,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const handleAudioToggle = (audioUrl: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="about-page" style={{ perspective: '1000px' }}>
      {/* Hero Section with Animated Banner */}
      <motion.section 
        ref={heroRef}
        className="about-hero-section"
        style={{ opacity: heroOpacity, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-banner">
          <div className="data-wave"></div>
          <div className="city-overlay"></div>
        </div>
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.h1 variants={itemVariants}>
            Making AI <em>Accessible</em> to Every Business
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            We started with one belief — AI should be accessible to every business, 
            not just tech giants. Today, we're turning that vision into reality, 
            one innovative solution at a time.
          </motion.p>
          <motion.div 
            className="hero-cta"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a 
              href="#contact" 
              className="cta-button"
              whileHover={{ 
                boxShadow: "0 0 30px rgba(0, 242, 254, 0.5)",
                textShadow: "0 0 8px rgba(0, 242, 254, 0.4)"
              }}
            >
              Start Your AI Journey
              <motion.span 
                className="arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Vision Section */}
      <motion.section 
        ref={visionRef}
        className="about-section vision-section"
        initial={{ opacity: 0 }}
        animate={isVisionInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisionInView ? "visible" : "hidden"}
          className="vision-content"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.h2 variants={itemVariants}>Our Vision</motion.h2>
          <motion.div className="vision-grid">
            <motion.div 
              className="vision-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <span className="icon">🌍</span>
              <h3>Democratizing AI</h3>
              <p>Making advanced AI technology accessible to businesses of all sizes</p>
            </motion.div>
            <motion.div 
              className="vision-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <span className="icon">💡</span>
              <h3>Innovation First</h3>
              <p>Pushing the boundaries of what's possible with AI technology</p>
            </motion.div>
            <motion.div 
              className="vision-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <span className="icon">🤝</span>
              <h3>Partnership</h3>
              <p>Building long-term relationships with our clients for sustainable growth</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        ref={processRef}
        className="about-section process-section"
        initial={{ opacity: 0 }}
        animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="process-content"
          variants={containerVariants}
          initial="hidden"
          animate={isProcessInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants}>Our AI Development Process</motion.h2>
          <motion.div className="process-timeline">
            {[1, 2, 3, 4, 5].map((step, index) => (
              <motion.div
                key={step}
                className="process-step"
                variants={processStepVariants}
                custom={index}
                whileHover="hover"
              >
                <div className="step-number">{step}</div>
                <div className="step-content">
                  <p className="step-label">Step {step}</p>
                  <h3>{
                    step === 1 ? 'Discovery & Strategy' :
                    step === 2 ? 'Solution Design' :
                    step === 3 ? 'Development & Integration' :
                    step === 4 ? 'Deployment & Launch' :
                    'Optimization & Support'
                  }</h3>
                  <p>{
                    step === 1 ? 'Understand your business needs, define AI objectives, and outline a strategic roadmap.' :
                    step === 2 ? 'Design the AI architecture, select technologies, and plan the development roadmap.' :
                    step === 3 ? 'Build, train, and integrate AI models, ensuring seamless functionality with existing systems.' :
                    step === 4 ? 'Implement the AI solution into your operations and provide comprehensive launch support.' :
                    'Continuously monitor, optimize, and provide ongoing support for peak performance.'
                  }</p>
                </div>
                {index < 4 && <div className="timeline-connector"></div>}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        className="about-section testimonials-section"
        initial={{ opacity: 0 }}
        animate={isTestimonialsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="testimonials-content container"
          variants={containerVariants}
          initial="hidden"
          animate={isTestimonialsInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants}>What Our Clients Say</motion.h2>
          <motion.p className="testimonials-subtitle" variants={itemVariants}>
            Hear directly from businesses we've helped transform with AI.
          </motion.p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`testimonial-card glass-card ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="testimonial-image">
                  <img src={testimonial.imageUrl} alt={testimonial.name} />
                  {testimonial.audioUrl && (
                    <button 
                      className="audio-button"
                      onClick={(e) => { e.stopPropagation(); handleAudioToggle(testimonial.audioUrl!); }}
                    >
                      {isPlaying && activeTestimonial === index ? <FaPause /> : <FaPlay />}
                    </button>
                  )}
                </div>
                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About; 