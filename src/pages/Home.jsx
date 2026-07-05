import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const slides = [
  {
    image: "/slider1.png",
    badge: "Paradise Found",
    title: "Escape to Tropical <span>Luxury Perfection</span>",
    description: "Discover a serene sanctuary where the jungle meets the ocean. Experience tranquility redefined in our eco-luxury retreat.",
    animation: "zoom"
  },
  {
    image: "/slider2.png",
    badge: "Ultimate Comfort",
    title: "Experience <span>Royal Living</span>",
    description: "Our ocean view suites offer the perfect blend of modern luxury and natural beauty. Wake up to the sound of waves.",
    animation: "fade"
  },
  {
    image: "/slider3.png",
    badge: "Zen Experience",
    title: "Rejuvenate Your <span>Body & Soul</span>",
    description: "Indulge in our world-class spa treatments and infinity pools. A holistic wellness journey awaits you.",
    animation: "slide"
  },
  {
    image: "/slider4.png",
    badge: "Gourmet Coastal",
    title: "Savor <span>Exquisite Flavors</span>",
    description: "Experience the finest coastal cuisine with fresh local ingredients. A culinary journey like no other.",
    animation: "zoom"
  }
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  // Animation variants
  const variants = {
    zoom: {
      initial: { scale: 1.2, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.1, opacity: 0 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slide: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -100, opacity: 0 }
    }
  };

  const currentSlide = slides[current];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Resort",
    "name": "Bagda Sea Beach Jungle Camp",
    "image": "https://bagdaseabeach.com/hero.png",
    "@id": "https://bagdaseabeach.com",
    "url": "https://bagdaseabeach.com",
    "telephone": "+918917504152",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bagda, Dublagadi",
      "addressLocality": "Balasore",
      "postalCode": "756027",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.565,
      "longitude": 87.05
    },
    "priceRange": "$$",
    "description": "Experience the ultimate eco-friendly getaway at Bagda Sea Beach Jungle Camp. Premium AC suites, luxury tents, and nature camping near Balasore.",
    "sameAs": [
      "https://share.google/S5lbslsFVHn2mP10s",
      "https://www.facebook.com/p/Bagda-Sea-Beach-jungle-camp-61551041402440/",
      "https://www.instagram.com/bagdaseabeach/",
      "https://www.justdial.com/Balasore/Bagda-Sea-Beach-Jungle-Camp-Dublagadi-Bahabalpur/9999P6782-6782-231230162233-K7X2_BZDET"
    ]
  };

  return (
    <div className="home-page">
      <SEO
        title="Bagda Sea Beach Jungle Camp - Best Beach Resort & Camping in Balasore"
        description="Experience the ultimate eco-friendly getaway at Bagda Sea Beach Jungle Camp (Dublagadi Beach). We offer premium AC suites, luxury tents, and nature camping near Balasore."
        keywords="Bagda Sea Beach, Bagda Jungle Camp, Bagda Beach Resort, Dublagadi Beach camping, Balasore beach resort, Eco camp Odisha, Tent booking Bagda, Bagda sea beach room booking"
        url="/"
        schema={localBusinessSchema}
      />
      <section className="hero-video">
        <div className="video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="bg-video"
          >
            <source src="https://video-previews.elements.envatousercontent.com/58b371a4-a177-4a34-8520-004914e17859/watermarked_preview/watermarked_preview.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="container hero-content-centered">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="hero-title-main">
                <span className="line-1">Welcome to Bagda Sea beach</span>
                <motion.span className="line-2" style={{ display: 'flex', gap: '2px' }}>
                  {"Jungle Camp".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 0, x: 0, rotateX: 0, color: "var(--accent-light)" }}
                      animate={{
                        opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        y: [0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0],
                        x: [0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0],
                        scale: [1, 1, 1, 1, 1, 1, 1, 1.3, 1, 1, 1, 1],
                        rotateX: [0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 0, 0],
                        color: ["#e5c09e", "#e5c09e", "#e5c09e", "#e5c09e", "#e5c09e", "#e5c09e", "#e5c09e", "#e5c09e", "#e5c09e", "#e5c09e", "#ffffff", "#e5c09e"]
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        times: [0, 0.05, 0.15, 0.2, 0.3, 0.35, 0.45, 0.5, 0.6, 0.7, 0.8, 0.95],
                        delay: 1 + (index * 0.1),
                        ease: "easeInOut"
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              className="hero-actions centered"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Link to="/book" className="btn btn-primary">Book Your Stay</Link>
              <Link to="/room" className="btn btn-outline-white">Explore Rooms</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h2>10+</h2>
              <p>Luxury Rooms</p>
            </div>
            <div className="stat-item">
              <h2>500+</h2>
              <p>Happy Guests</p>
            </div>
            <div className="stat-item">
              <h2>10+</h2>
              <p>Local Tourist Places</p>
            </div>
            <div className="stat-item">
              <h2>100%</h2>
              <p>Eco-Friendly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenities Section */}
      <section className="section amenities-preview">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">Why Choose Us</span>
            <h2>Exclusive Amenities</h2>
          </div>
          <div className="amenities-grid-home">
            <div className="amenity-card-home">
              <div className="icon-box-home">🌊</div>
              <h3>Private Beach</h3>
              <p>Access to our pristine, secluded shoreline for ultimate privacy.</p>
            </div>
            <div className="amenity-card-home">
              <div className="icon-box-home">🧘</div>
              <h3>Yoga & Wellness</h3>
              <p>Daily sessions by the ocean to rejuvenate your mind and body.</p>
            </div>
            <div className="amenity-card-home">
              <div className="icon-box-home">🍽️</div>
              <h3>Gourmet Dining</h3>
              <p>Farm-to-table experiences with fresh local ingredients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section our-story-section">
        <div className="container">
          <div className="story-layout">
            <div className="story-content">
              <span className="sub-title">Our Story</span>
              <h2>Discover the Essence of Bagda</h2>
              <div className="story-text">
                <p>Bagda Sea Beach Jungle Camp, Dublagadi, Balasore is equipped with all the amenities you need for a comfortable stay. Our well-maintained campsite offers spacious tents, clean restroom facilities, and a friendly staff ready to assist you with any need.</p>
                <p>Discover the hidden treasures of Bagda Sea Beach Jungle Camp, Dublagadi and its surrounding attractions. Come, be enchanted by nature's bounty, and create memories that will last a lifetime.</p>
                <p>When you choose Bagda Sea Beach Jungle Camp, Dublagadi, Balasore as your destination, you're not just limited to the campsite's beauty. Explore nearby attractions like <strong>Chandipur Beach</strong>, where you can witness the awe-inspiring phenomenon of the disappearing sea. Take a leisurely stroll on <strong>Balaramgadi Beach</strong>, known for its untouched beauty, or visit the <strong>Naupalgadi Shri Radha Krishna Temple</strong>, a place of spiritual significance and architectural marvel.</p>
              </div>
            </div>
            <div className="travel-info-card">
              <h3>How to Reach Us</h3>
              <div className="travel-grid">
                <div className="travel-item">
                  <span className="t-icon">🚉</span>
                  <div>
                    <h4>Nearest Station</h4>
                    <p>Balasore Railway Station (~35 km)</p>
                  </div>
                </div>
                <div className="travel-item">
                  <span className="t-icon">🚌</span>
                  <div>
                    <h4>Bus Stand</h4>
                    <p>Balasore Bus Stand (~35 km)</p>
                  </div>
                </div>
                <div className="travel-item">
                  <span className="t-icon">🏙️</span>
                  <div>
                    <h4>Near City</h4>
                    <p>Balasore City (~35 km)</p>
                  </div>
                </div>
                <div className="travel-item">
                  <span className="t-icon">✈️</span>
                  <div>
                    <h4>Airports</h4>
                    <p>Bhubaneswar (BBI) ~230 km</p>
                    <p>Kolkata (CCU) ~250 km</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Menu Section */}
      <section className="section food-menu-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">Food Menu</span>
            <h2>Explore Delicious Foods</h2>
          </div>
          <div className="food-grid">
            {[
              { title: "Welcome Drinks", img: "/food/drink.png" },
              { title: "Chicken Rice Thali", img: "/food/thali.png" },
              { title: "Barbeque Nation", img: "/food/bbq.png" },
              { title: "Crab Masala", img: "/food/crab.png" },
              { title: "Pomfret Fish Curry", img: "/food/fish.png" },
              { title: "Prawns Fish", img: "/food/prawns.png" }
            ].map((food, i) => (
              <div key={i} className="food-item">
                <img src={food.img} alt={food.title} />
                <div className="food-overlay">
                  <div className="food-title-box">
                    <h4>{food.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Attractions Section */}
      <section className="section tourist-places-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">Near Bagda Sea Beach</span>
            <h2>Local Attractions</h2>
            <p className="section-desc">Experience the authentic local culture and beauty just steps away from our resort.</p>
          </div>

          <div className="tourist-grid">
            {[
              {
                title: "Bhagha Jatin Point",
                desc: "The scenic river mouth where history meets the sea. A perfect spot for sunset views and boat watching.",
                img: "/local/bhagha_jatin.png",
                tag: "Landmark"
              },
              {
                title: "Mamoe Beach Island",
                desc: "A hidden island paradise with white sands and calm waters, accessible by a short boat ride.",
                img: "/local/mamoe_beach.png",
                tag: "Island"
              },
              {
                title: "Bahabalpur Port",
                desc: "A major fishing harbor near Balasore, busy with colorful trawlers and fresh fish markets.",
                img: "/local/bahabalpur_port.png",
                tag: "Port"
              },
              {
                title: "River Boating",
                desc: "Enjoy peaceful boat trips in the river estuary, exploring the scenic coastal landscapes.",
                img: "/local/boating.png",
                tag: "Adventure"
              },
              {
                title: "Bahabalpur Shiv Temple",
                desc: "A revered local temple dedicated to Lord Shiva in the Bahabalpur village.",
                img: "/local/bahabalpur_shiv.png",
                tag: "Spiritual"
              },
              {
                title: "Maa Mangla Devi (Bagda)",
                desc: "The sacred local deity temple of Bagda, a spiritual heart of the community.",
                img: "/local/maa_mangla.png",
                tag: "Sacred"
              },
              {
                title: "Shree Jagannath (Talborai)",
                desc: "A beautiful Jagannath temple located in the Talborai village area.",
                img: "/local/talborai_jagannath.png",
                tag: "Sacred"
              },
              {
                title: "Parikhi Beach",
                desc: "A serene beach known for its untouched natural beauty and proximity to the sea.",
                img: "/local/parikhi.png",
                tag: "Beach"
              },
              {
                title: "Swapneswar Mahadev (Parikhi)",
                desc: "A significant ancient Shiva temple in the Parikhi area, popular for local festivals.",
                img: "/local/swapneswar.png",
                tag: "Spiritual"
              }
            ].map((place, i) => (
              <motion.div
                key={i}
                className="tourist-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="tourist-img-box">
                  <img src={place.img} alt={place.title} />
                  <span className="tourist-tag">{place.tag}</span>
                </div>
                <div className="tourist-info">
                  <h3>{place.title}</h3>
                  <p>{place.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Carousel Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">Google Reviews</span>
            <h2>Guest Experiences</h2>
          </div>

          <div className="reviews-carousel-wrapper">
            <motion.div
              className="reviews-carousel"
              drag="x"
              dragConstraints={{ right: 0, left: -1000 }}
            >
              {[
                {
                  name: "Ansuman Dash",
                  role: "Nature Lover",
                  text: "Beautiful place for nature lovers. Very clean and fresh air. Tents are comfortable and the staff is very well behaved.",
                  stars: 5
                },
                {
                  name: "Subrat Kumar",
                  role: "Verified Guest",
                  text: "Everything is well managed. The food was just wow! We had crabs and fish which was very tasty. Best budget friendly place.",
                  stars: 5
                },
                {
                  name: "Debasish Mohanty",
                  role: "Traveler",
                  text: "The location is ultimate. Just 2 mins walk to the beach. Highly recommend for family and friends. Flexible timings helped us a lot.",
                  stars: 5
                },
                {
                  name: "Sonali Sahu",
                  role: "Family Guest",
                  text: "Best hospitality I've seen. They greeted us with welcome drinks. The jungle environment is amazing. 10/10.",
                  stars: 5
                },
                {
                  name: "Rashmita Jena",
                  role: "Verified Traveler",
                  text: "Nice camping site. Very safe for girls. We stayed in an AC room which was very good. Worth every penny.",
                  stars: 5
                },
                {
                  name: "Akash Pradhan",
                  role: "Local Guide",
                  text: "Good food, good staff and the best beach experience. Must visit!",
                  stars: 5
                }
              ].map((review, i) => (
                <div key={i} className="testimonial-card google-review carousel-item">
                  <div className="review-header">
                    <div className="google-icon-box">G</div>
                    <div className="stars">{"⭐".repeat(review.stars)}</div>
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="user-info">
                    <h4>{review.name}</h4>
                    <span>{review.role}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="view-all-reviews" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href="https://www.google.com/maps/place/Jungle+Camp/@21.4909128,87.0939457,674m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a1ced62b0219f85:0x463ac60e69cddd07!8m2!3d21.4909128!4d87.0939457!16s%2Fg%2F11ty45jpcy?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View More on Google My Business
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Paradise?</h2>
            <p>Book your stay today and get 15% off on your first visit.</p>
            <Link to="/book" className="btn btn-primary">Book Your Stay Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
