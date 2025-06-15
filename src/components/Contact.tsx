import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-content">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Contact 