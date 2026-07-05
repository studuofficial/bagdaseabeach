import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, CheckCircle2, Coffee, Utensils, Clock, ArrowLeft, Phone } from 'lucide-react';

const roomData = {
  "premium-ac": {
    title: "Premium AC Suite",
    price: 2200,
    category: "AC Room",
    images: ["/suite.png", "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800", "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800"],
    description: "Experience the ultimate luxury in our Premium AC Suite. Featuring handcrafted wooden furniture, a king-size bed, and a private balcony overlooking the Bay of Bengal.",
    features: ["King Size Bed", "High-Speed AC", "Private Bathroom", "Sea View Balcony", "Tea/Coffee Maker", "Premium Toiletry"]
  },
  "eco-non-ac": {
    title: "Eco Non-AC Room",
    price: 1800,
    category: "Non AC",
    images: ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800"],
    description: "Perfect for nature lovers who prefer natural sea breeze. Large windows provide excellent ventilation and a direct view of the Casuarina forest.",
    features: ["Double Bed", "Natural Ventilation", "Forest View", "Attached Bath", "Mosquito Net", "Ceiling Fan"]
  },
  "couple-suite": {
    title: "Romantic Couple Suite",
    price: 2000,
    category: "Couple Room",
    images: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800", "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=800"],
    description: "A private sanctuary for couples. This suite is designed for intimacy with soft lighting, premium linens, and a quiet balcony for evening talks.",
    features: ["King Bed", "Dimmable Lighting", "AC", "Private Balcony", "Couple Bathing Area", "Room Service"]
  },
  "forest-view": {
    title: "Lush Forest View",
    price: 1800,
    category: "Forest View",
    images: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800"],
    description: "Tucked away in the greenery, these rooms offer total peace. Listen to the birds chirping as you wake up in the heart of nature.",
    features: ["Quiet Environment", "Large Windows", "Forest Backdrop", "Attached Bath", "Natural Light", "Lounge Chair"]
  },
  "luxury-tent": {
    title: "Adventure Luxury Tent",
    price: 1500,
    category: "Tent",
    images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800", "https://images.unsplash.com/photo-1533580451471-082025fa41c0?auto=format&fit=crop&w=800"],
    description: "The ultimate glamping experience. Our tents are weatherproof and built on elevated platforms, offering a true jungle camping feel with comfort.",
    features: ["Waterproof Fabric", "Premium Mattresses", "Power Points", "Secure Locks", "Shared Clean Bath", "Camping Chairs"]
  },
  "ac-dormitory": {
    title: "2-Bed AC Dormitory",
    price: 1800,
    category: "Dormitory",
    images: ["https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800", "https://images.unsplash.com/photo-1555854816-809d28f39c1c?auto=format&fit=crop&w=800"],
    description: "Spacious and cool, our 2-bed AC dormitory is perfect for groups or solo travelers looking for a comfortable shared space.",
    features: ["Two Single Beds", "Full AC", "Personal Lockers", "Group Vibes", "Clean Restrooms", "Storage Area"]
  }
};

const RoomDetails = () => {
  const { id } = useParams();
  const room = roomData[id];
  const [activeImg, setActiveImg] = useState(room?.images[0]);
  const [showBooking, setShowBooking] = useState(false);

  // Form State
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (room) setActiveImg(room.images[0]);
  }, [id, room]);

  if (!room) return <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}><h2>Room Not Found</h2><Link to="/room">Back to Rooms</Link></div>;

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppBooking = () => {
    const { checkIn, checkOut, guests } = bookingData;

    if (!checkIn || !checkOut) {
      alert("Please select both Check-in and Check-out dates.");
      return;
    }

    const message = `Hello Bagda Sea Beach Jungle Camp!\n\nI want to book a room with the following details:\n\n🏨 *Room:* ${room.title}\n📅 *Check-in:* ${checkIn}\n📅 *Check-out:* ${checkOut}\n👥 *Guests:* ${guests}\n💰 *Price:* ₹${room.price}/head\n🍴 *Meal Plan:* Full Board Included\n\nPlease confirm availability.`;
    window.open(`https://wa.me/918917504152?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="page-container">
      <SEO
        title={`${room.title} - Bagda Sea Beach Jungle Camp`}
        description={`Book the ${room.title} at Bagda Sea Beach Resort. Enjoy luxury camping with ${room.category} facilities. Included: full board meals and 24-hr check-in.`}
        keywords={`Book ${room.title}, Bagda Sea Beach ${room.category}, Dublagadi Beach camping, Balasore beach resort rooms`}
        url={`/room/${id}`}
      />
      <section className="room-detail-hero">
        <div className="container">
          <Link to="/room" className="back-link"><ArrowLeft size={18} /> Back to Accommodations</Link>
          <div className="detail-layout">
            {/* Gallery Section */}
            <div className="gallery-section">
              <div className="main-image">
                <motion.img
                  key={activeImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={activeImg}
                  alt={room.title}
                />
              </div>
              <div className="thumbnails">
                {room.images.map((img, i) => (
                  <div
                    key={i}
                    className={`thumb ${activeImg === img ? 'active' : ''}`}
                    onClick={() => setActiveImg(img)}
                  >
                    <img src={img} alt={`Room view ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="info-section">
              <span className="badge">{room.category}</span>
              <h1>{room.title}</h1>
              <div className="rating">
                <Star size={18} fill="var(--accent)" stroke="var(--accent)" />
                <Star size={18} fill="var(--accent)" stroke="var(--accent)" />
                <Star size={18} fill="var(--accent)" stroke="var(--accent)" />
                <Star size={18} fill="var(--accent)" stroke="var(--accent)" />
                <Star size={18} fill="var(--accent)" stroke="var(--accent)" />
                <span>(4.9/5 Rating)</span>
              </div>
              <div className="price-tag">₹{room.price} <span>/ Per Head</span></div>

              <p className="description">{room.description}</p>

              <div className="features-grid-list">
                {room.features.map((feat, i) => (
                  <div key={i} className="feat-item">
                    <CheckCircle2 size={18} className="feat-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="quick-inclusions">
                <div className="inc-item"><Coffee size={20} /> <span>Breakfast Included</span></div>
                <div className="inc-item"><Utensils size={20} /> <span>Full Board Available</span></div>
                <div className="inc-item"><Clock size={20} /> <span>Flexible Check-in</span></div>
              </div>

              <button className="btn btn-primary btn-block" onClick={() => setShowBooking(true)}>Book This Room</button>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Compact Booking Modal */}
      <AnimatePresence>
        {showBooking && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBooking(false)}
          >
            <motion.div
              className="modal-content compact-booking-card"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="card-header">
                <h2>Confirm Booking</h2>
                <p>Stay details for <strong>{room.title}</strong></p>
              </div>

              <div className="booking-inputs-grid">
                <div className="form-group">
                  <label>Check-in</label>
                  <input type="date" name="checkIn" value={bookingData.checkIn} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Check-out</label>
                  <input type="date" name="checkOut" value={bookingData.checkOut} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Guests</label>
                  <select name="guests" value={bookingData.guests} onChange={handleInputChange}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                  </select>
                </div>
              </div>

              <div className="booking-summary-strip">
                <div className="summary-item"><span>Type:</span> <strong>{room.category}</strong></div>
                <div className="summary-item"><span>Price:</span> <strong>₹{room.price}/Head</strong></div>
                <div className="summary-item"><span>Meals:</span> <strong>Included</strong></div>
              </div>

              <p className="whatsapp-note">Details will be sent via WhatsApp for final confirmation.</p>

              <div className="modal-actions-grid">
                <button className="btn btn-secondary" onClick={() => setShowBooking(false)}>Cancel</button>
                <button className="btn btn-primary whatsapp-btn" onClick={handleWhatsAppBooking}>
                  <Phone size={18} /> Book Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoomDetails;
