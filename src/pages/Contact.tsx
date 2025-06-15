import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Contact.css';
import { IconMail, IconPhone, IconBrandWhatsapp, IconCalendar, IconBrandGmail, IconBrandLinkedin } from '@tabler/icons-react';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <motion.div 
          /* Removed all animation properties to test if they cause clipping */
        >
          <h1>Let's collaborate</h1>
          <p className="hero-subtitle">Need assistance or have questions?</p>
        </motion.div>
      </section>

      {/* Reviews/Ratings Section */}
      <section className="reviews-section">
        <div className="reviews-grid">
          <div className="review-card">
            <IconBrandGmail size={40} className="review-icon" />
            <h3>Gmail</h3>
            <p>Email us directly</p>
            <a href="mailto:info@crescentai.com" target="_blank" rel="noopener noreferrer">Send Email</a>
          </div>
          <div className="review-card">
            <IconBrandLinkedin size={40} className="review-icon" />
            <h3>LinkedIn Profile</h3>
            <p>Connect with us on LinkedIn</p>
            <a href="https://www.linkedin.com/company/crescentai" target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>
        </div>
      </section>

      {/* Main Contact Form and Info */}
      <section className="main-contact-section">
        <div className="form-and-info-grid">
          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Project Enquiry</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="projectBudget">Project Budget</label>
                <select id="projectBudget" name="projectBudget">
                  <option value="">Select Budget</option>
                  <option value="25k-50k">$25K to $50K</option>
                  <option value="50k-200k">$50K to $200K</option>
                  <option value="200k-500k">$200K to $500K</option>
                  <option value="500k-plus">$500K +</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="source">How did you hear about us?</label>
                <select id="source" name="source">
                  <option value="">Select Source</option>
                  <option value="google">Google</option>
                  <option value="clutch">Clutch</option>
                  <option value="upwork">UpWork</option>
                  <option value="goodfirms">GoodFirms</option>
                </select>
              </div>
              <div className="form-group file-upload-group">
                <label htmlFor="document">Attach Document (Optional)</label>
                <input type="file" id="document" name="document" />
                <p className="small-text">Drag and Drop (or) Choose Files</p>
              </div>
              <div className="form-group checkbox-group">
                <input type="checkbox" id="nda" name="nda" />
                <label htmlFor="nda">I want to protect my data by signing an NDA.</label>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </motion.div>

          {/* Direct Contact Info */}
          <motion.div 
            className="direct-contact-info"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-item">
              <IconMail size={28} className="contact-icon" />
              <h3>Write to us</h3>
              <a href="mailto:sales@crescentai.com">sales@crescentai.com</a>
            </div>
            <div className="contact-item">
              <IconBrandWhatsapp size={28} className="contact-icon" />
              <h3>WhatsApp</h3>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">+1 123 456 7890 (USA)</a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">+91 987 654 3210 (India)</a>
            </div>
            <div className="contact-item">
              <IconPhone size={28} className="contact-icon" />
              <h3>Call Us</h3>
              <a href="tel:+1234567890">+1 123 456 7890 (USA)</a>
              <a href="tel:+919876543210">+91 987 654 3210 (India)</a>
            </div>
            <div className="contact-item book-meeting-item">
              <IconCalendar size={28} className="contact-icon" />
              <h3>Book a Meeting</h3>
              <p>Select a Date and Time for the Meeting at Your Convenience</p>
              <a href="https://calendly.com/your-username" target="_blank" rel="noopener noreferrer" className="cta-button secondary small">
                Schedule a meeting
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials Section (from Home.tsx or a dedicated component) */}
      {/* Removed as per user request */}
      {/*
      <section className="client-testimonials-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>What our valuable clients have to say about us</h2>
          <p className="section-subtitle">Explore how clients achieve remarkable success through transformative collaboration with Crescent AI—realizing their goals, driving impact.</p>
          <div className="testimonial-card-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"My Preferred IT Development Company for Years. We have worked with Crescent AI for more than 4 years now and continue to do so with most of our projects, ranging from web to app development. They provide excellent work and even better client servicing. Their costs are reasonable and we are happy to grow with them."</p>
              <p className="client-name">- Jerome Tan</p>
              <div className="star-rating">★★★★★</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"We're impressed by how professionally they work and the range of skill sets they have in-house. By assigning a single point of contact, Crescent AI expertly managed client interactions. They delivered strong work and iterated until everyone was happy."</p>
              <p className="client-name">- Olafur Helgi Haraldsson</p>
              <div className="star-rating">★★★★★</div>
            </div>
          </div>
        </motion.div>
      </section>
      */}

      {/* Footer Contact Info */}
      <section className="footer-contact-info-section">
        <div className="footer-contact-grid">
          <div className="contact-col">
            <h3>Work Enquiry</h3>
            <p><a href="mailto:sales@crescentai.com">sales@crescentai.com</a></p>
            <p><a href="tel:+919099985448">+91-9099985448</a></p>
          </div>
          <div className="contact-col">
            <h3>Career Enquiry</h3>
            <p><a href="mailto:hr@crescentai.com">hr@crescentai.com</a></p>
            <p><a href="tel:+919099985430">+91-9099985430</a></p>
          </div>
          <div className="contact-col">
            <h3>Industries</h3>
            <ul>
              <li>Healthcare and Fitness</li>
              <li>Warehouse and Logistics</li>
              <li>Travel and hospitality</li>
              <li>Education and eLearning</li>
              <li>Marketplace</li>
            </ul>
          </div>
          <div className="contact-col">
            <h3>Services</h3>
            <ul>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Website Performance</li>
              <li>Website Maintenance</li>
            </ul>
          </div>
          <div className="contact-col">
            <h3>AI Services</h3>
            <ul>
              <li>AI Agent Development</li>
              <li>AI Consulting</li>
              <li>Generative AI Development</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Crescent AI. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact; 