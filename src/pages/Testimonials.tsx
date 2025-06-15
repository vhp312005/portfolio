import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconMessage } from '@tabler/icons-react';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    quote: "Crescent AI transformed our business with their innovative AI agents! Their solutions are truly cutting-edge and have significantly boosted our efficiency.",
    author: "Sarah Chen",
    role: "CEO",
    audio: "/path/to/sarah-audio.mp3" // Optional: Placeholder for audio clip
  },
  {
    id: 2,
    quote: "Highly recommend their computer vision tools for automation. The team was incredibly responsive and delivered beyond our expectations.",
    author: "David Miller",
    role: "Operations Manager",
    audio: "" // No audio for this one
  },
  {
    id: 3,
    quote: "Working with Crescent AI was a game-changer for our marketing efforts. Their AI-powered insights gave us a competitive edge.",
    author: "Emily White",
    role: "Marketing Director",
    audio: "/path/to/emily-audio.mp3"
  },
  {
    id: 4,
    quote: "The AI models developed by Crescent AI seamlessly integrated into our existing infrastructure, providing immediate value and clear ROI.",
    author: "John Davis",
    role: "CTO",
    audio: ""
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-page">
      <motion.section 
        className="testimonials-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>
          <IconMessage size={36} stroke={1.5} />
          Client Success Stories
        </h1>
        <p>
          Hear directly from our clients about how Crescent AI's AI solutions have transformed their businesses, 
          delivering measurable impact and paving the way for future innovation.
        </p>
      </motion.section>

      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <motion.div 
            key={testimonial.id}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.section 
        className="testimonials-cta-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2>Let's write your success story.</h2>
        <Link to="/contact" className="cta-button">
          Book a call
          <span className="arrow">→</span>
        </Link>
      </motion.section>
    </div>
  );
};

export default Testimonials; 