import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Home, Mail, User, Phone } from 'lucide-react';
import SEO from '../components/SEO';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'ocean-view'
  });

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you shortly to confirm.');
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-wrapper">
      <SEO 
        title="Book Bagda Sea Beach Tents & Rooms Online - Jungle Camp"
        description="Reserve your stay at Bagda Sea Beach Jungle Camp. Fill out the booking form to check availability for luxury tents and AC suites in Balasore."
        keywords="Book Bagda Sea Beach Tents online, Bagda camping booking, Dublagadi beach resort reservation, Balasore eco camp booking"
        url="/book" 
      />
      <section className="page-header booking-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Book Your Stay
          </motion.h1>
          <p>Experience the ultimate tropical luxury at Bagda Sea Beach Resort.</p>
        </div>
      </section>

      <section className="section booking-section">
        <div className="container">
          <div className="booking-container">
            <motion.div
              className="booking-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2>Reservation Details</h2>
              <p>Please fill out the form below. Our team will verify availability and get back to you within 24 hours.</p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="icon-circle"><Calendar size={20} /></div>
                  <div>
                    <h4>Flexible Dates</h4>
                    <p>Check availability for your preferred dates.</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="icon-circle"><Home size={20} /></div>
                  <div>
                    <h4>Luxury Suites</h4>
                    <p>Choose from our wide range of premium rooms.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="booking-form-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-grid">
                  <div className="form-group">
                    <label><User size={16} /> Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label><Mail size={16} /> Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label><Phone size={16} /> Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label><Home size={16} /> Room Type</label>
                    <select name="roomType" required onChange={handleChange}>
                      <option value=" " disabled selected>Select Room</option>
                      <option value="ac">AC Room</option>
                      <option value="non-ac">Non AC Room</option>
                      <option value="couple">Couple Room</option>
                      <option value="forest-view">Forest View</option>
                      <option value="tent">Tent</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label><Calendar size={16} /> Check-In</label>
                    <input
                      type="date"
                      name="checkIn"
                      min={today}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label><Calendar size={16} /> Check-Out</label>
                    <input
                      type="date"
                      name="checkOut"
                      min={formData.checkIn || today}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label><Users size={16} /> Number of Guests</label>
                    <input
                      type="number"
                      name="guests"
                      min="1"
                      max="10"
                      defaultValue="1"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Confirm Booking Request</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
