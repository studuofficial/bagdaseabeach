import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';
import { Star, ChevronRight, Coffee, Utensils, Clock, Gift, Info } from 'lucide-react';

const RoomCard = ({ room }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="room-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/room/${room.id}`)}
    >
      <div className="room-image">
        <img src={room.image} alt={room.title} />
        <div className="room-tag">{room.category}</div>
      </div>
      <div className="room-info">
        <h3>{room.title}</h3>
        <div className="room-meta">
          <span className="price">₹{room.price}<span>/Per Head</span></span>
          <div className="rating">
            <Star size={14} fill="var(--accent)" stroke="var(--accent)" />
            <span>4.9</span>
          </div>
        </div>
        <button className="btn-text">View Details <ChevronRight size={16} /></button>
      </div>
    </motion.div>
  );
};

const Room = () => {
  const rooms = [
    { id: "premium-ac", title: "Premium AC Suite", price: 2200, category: "AC Room", image: "/suite.png" },
    { id: "eco-non-ac", title: "Eco Non-AC Room", price: 1800, category: "Non AC", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80" },
    { id: "couple-suite", title: "Romantic Couple Suite", price: 2000, category: "Couple Room", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80" },
    { id: "forest-view", title: "Lush Forest View", price: 1800, category: "Forest View", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" },
    { id: "luxury-tent", title: "Adventure Luxury Tent", price: 1500, category: "Tent", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" },
    { id: "ac-dormitory", title: "2-Bed AC Dormitory", price: 1800, category: "Dormitory", image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80" }
  ];

  const inclusions = [
    { icon: <Gift size={24} />, title: "Welcome Drink", desc: "Refreshing welcome drink served upon arrival." },
    { icon: <Coffee size={24} />, title: "Morning Tea", desc: "Morning Tea & Biscuits to start your day." },
    { icon: <Utensils size={24} />, title: "Full Board Meals", desc: "Includes Breakfast, Lunch, Evening Snacks, and Dinner." },
    { icon: <Clock size={24} />, title: "Flexible Check-in", desc: "24-hour cycle: Checkout at the same time you checked in." }
  ];

  return (
    <div className="page-container">
      <SEO
        title="Bagda Sea Beach Room Booking - Luxury Tents & AC Suites"
        description="Book your stay at Bagda Sea Beach Jungle Camp. Choose from premium AC suites, eco non-AC rooms, couple suites, and adventure luxury tents in Balasore."
        keywords="Bagda sea beach room booking, Tent booking Bagda beach, AC Suites Bagda, Luxury Tents Bagda Beach, Bagda Resort booking, Eco camp rooms Odisha"
        url="/room"
      />
      <section className="page-hero" style={{ backgroundImage: "url('/bg/room_bg.png')" }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Refined Accommodations
          </motion.h1>
          <p>Experience the perfect blend of comfort and nature at Bagda Sea Beach.</p>
        </div>
      </section>

      <section className="section rooms-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">Our Rooms</span>
            <h2>Choose Your Sanctuary</h2>
            <p>Pricing is inclusive of stay and multiple meal services per head.</p>
          </div>
          <div className="rooms-grid">
            {rooms.map((room, i) => (
              <RoomCard key={i} room={room} />
            ))}
          </div>
        </div>
      </section>

      <section className="section inclusions-section" style={{ background: 'var(--bg-creme)' }}>
        <div className="container">
          <div className="section-header">
            <span className="sub-title">Packages</span>
            <h2>What's Included</h2>
          </div>
          <div className="inclusions-grid">
            {inclusions.map((item, i) => (
              <div key={i} className="inclusion-card">
                <div className="inc-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="extra-info-box">
            <div className="info-icon"><Info size={24} /></div>
            <div className="info-text">
              <h4>Additional Charges & Extras</h4>
              <p>Special items like <strong>Barbecue, Crabs, and Big Prawn Fish</strong> are not included in the standard package and will incur extra costs. Any other extra services beyond the package will be charged separately.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Room;
