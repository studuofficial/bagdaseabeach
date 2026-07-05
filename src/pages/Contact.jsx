import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully. We will get back to you soon.');
  };

  return (
    <div className="page-wrapper">
      <SEO
        title="Contact Bagda Sea Beach Jungle Camp - Bookings & Inquiries"
        description="Get in touch with Bagda Sea Beach Resort for bookings and inquiries. Find our contact number, email, and location in Dublagadi, Balasore."
        keywords="Contact Bagda Jungle Camp, Bagda Beach phone number, Bagda resort booking contact, Bagda Sea beach location, Dublagadi beach camp address"
        url="/contact"
      />
      <section className="page-header contact-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.h1>
          <p>We are here to assist you with your stay and any inquiries you may have.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-container">
            <motion.div
              className="contact-info-side"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="sub-title">Get in Touch</span>
              <h2>Let's Talk About <br />Your Stay</h2>
              <p>Whether you have a question about our rooms, amenities, or local tours, our team is ready to help.</p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="detail-icon"><MapPin /></div>
                  <div className="detail-text">
                    <h4>Location</h4>
                    <p>Bagda, Dublagadi, Balasore, Odisha-756027</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="detail-icon"><Phone /></div>
                  <div className="detail-text">
                    <h4>Phone Number</h4>
                    <p>(+91) 8917504152 / (+91) 8658559482</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="detail-icon"><Mail /></div>
                  <div className="detail-text">
                    <h4>Email Address</h4>
                    <p>booking@bagdaseabeach.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-side"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="contact-card">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Inquiry about Room" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Tell us how we can help..." rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '1.5rem' }}>
                    <Send size={18} style={{ marginRight: '10px' }} /> Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-container-premium">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d674.3323067144421!2d87.0939457!3d21.4909128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ced62b0219f85%3A0x463ac60e69cddd07!2sJungle%20Camp!5e0!3m2!1sen!2sin!4v1715188500000!5m2!1sen!2sin"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jungle Camp Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
