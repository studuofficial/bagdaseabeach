import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ArrowLeft, MapPin, Clock, Navigation, Calendar, Camera, Info, CheckCircle2 } from 'lucide-react';

const touristData = {
  "panchalingeswar-temple": {
    title: "Panchalingeswar Temple",
    category: "Spiritual & Nature",
    img: "/tourist/panchalingeswar.png",
    description: "Located on the Nilgiri hills, this temple is a serene spot where five Shiva Lingas are continuously washed by a natural stream. It requires a small trek of 260 steps to reach the top, offering a perfect blend of spirituality and adventure.",
    longDesc: "Panchalingeswar Temple is one of the most popular spiritual destinations near Balasore. The name comes from the five lingas of Lord Shiva that are naturally submerged in a perennial stream. Visitors have to lie down and touch the lingas in the flowing water. The surrounding forest of the Nilgiri hills makes it a great spot for nature lovers and trekkers. The atmosphere is filled with the sound of bells and the rhythmic flow of water, creating a divine experience.",
    distance: "45 km from Bagda Jungle Camp",
    bestTime: "Early morning to avoid crowds (6:00 AM - 10:00 AM)",
    duration: "3-4 Hours",
    highlights: ["Natural Water Stream", "Hill Trekking", "Panoramic Views", "Ancient Temple Architecture"],
    howToReach: "The best way to reach is via a private taxi or your own vehicle. From Bagda, it's a scenic drive through rural Odisha and Nilgiri town."
  },
  "remuna-temple": {
    title: "Remuna Khirachora Temple",
    category: "Heritage & Sacred",
    img: "/tourist/remuna.png",
    description: "A 12th-century Vaishnavite shrine famous for its architectural beauty and the legend of 'Khirachora'. It is one of the most revered seats of Vaishnavism in Odisha.",
    longDesc: "The Khirachora Gopinath Temple is steeped in history and legend. The name 'Khirachora' means 'Stealer of Milk', referring to the story of the deity stealing a pot of sweet rice pudding for his devotee, Madhavendra Puri. The temple is built in the traditional Kalinga style and is world-famous for its delicious 'Amruta Keli' (condensed milk pudding). It's a peaceful sanctuary for those seeking spiritual solace and historical insights.",
    distance: "35 km from Bagda Jungle Camp",
    bestTime: "Evening for the Sandhya Aarti",
    duration: "1.5 - 2 Hours",
    highlights: ["Amruta Keli Prasadam", "12th Century Architecture", "Vaishnavite Culture", "Peaceful Courtyard"],
    howToReach: "Remuna is located very close to Balasore town. It's an easy 1-hour drive from Bagda camp."
  },
  "chandipur-beach": {
    title: "Chandipur Beach",
    category: "Unique Natural Phenomenon",
    img: "/tourist/chandipur.png",
    description: "Known as the 'Hide and Seek Beach', Chandipur is a unique place where the sea recedes up to 5 kilometers twice a day during low tide, revealing a vast seabed.",
    longDesc: "Chandipur Beach offers a sight like nowhere else on Earth. Due to the unique topography, the tide disappears completely for hours, allowing you to walk, cycle, or even drive on the ocean floor. You can see red crabs, sea shells, and small fish left behind by the receding water. It's also home to the Integrated Test Range (ITR) of the Indian Army, making it a place of both natural wonder and national importance.",
    distance: "40 km from Bagda Jungle Camp",
    bestTime: "Depends on tide timings (Sunset is usually beautiful)",
    duration: "2-3 Hours",
    highlights: ["Receding Tide", "Seabed Walk", "Red Ghost Crabs", "Fresh Seafood Stalls"],
    howToReach: "Connected via good roads from Balasore. We recommend checking tide timings before visiting."
  },
  "similipal-sanctuary": {
    title: "Similipal National Park",
    category: "Wildlife & Adventure",
    img: "/tourist/similipal.png",
    description: "A vast wildlife sanctuary and tiger reserve with stunning waterfalls, dense Sal forests, and diverse wildlife including Royal Bengal Tigers and Asian Elephants.",
    longDesc: "Similipal is a sprawling UNESCO Biosphere Reserve. It is famous for its dense forests, sprawling grasslands, and magnificent waterfalls like Barehipani (one of India's highest) and Joranda. The park is a haven for biodiversity, housing tigers, leopards, elephants, and over 300 species of birds. It's a full-day adventure for those who want to immerse themselves in the wild heart of Odisha.",
    distance: "90 km from Bagda Jungle Camp",
    bestTime: "November to February (Park remains closed during Monsoon)",
    duration: "Full Day Trip",
    highlights: ["Barehipani Waterfall", "Tiger Reserve Safari", "Elephant Sightings", "Dense Sal Forests"],
    howToReach: "Requires a 4x4 vehicle and forest permits. Entry points are at Pithabata and Lulung."
  },
  "nilgiri-hills": {
    title: "Nilgiri Hills & Temple",
    category: "Nature & Heritage",
    img: "/tourist/nilgiri.png",
    description: "Lush green hills surrounding the ancient Nilgiri Jagannath Temple. The area is known for its scenic beauty, local handloom, and rich history of the Nilgiri princely state.",
    longDesc: "Nilgiri offers a refreshing hilly landscape in the plains of coastal Odisha. The Jagannath Temple here is a replica of the Puri temple traditions. Apart from the temple, the Nilgiri palace and the local markets selling stone-carved items and handloom sarees are worth a visit. It's a great spot for those who want to experience the royal history and natural beauty of the region in one go.",
    distance: "42 km from Bagda Jungle Camp",
    bestTime: "Afternoon to Evening",
    duration: "2-3 Hours",
    highlights: ["Jagannath Temple", "Royal Palace Ruins", "Stone Carvings", "Green Hill Views"],
    howToReach: "Easily accessible by road via Balasore."
  },
  "mitrapur-temple": {
    title: "Mitrapur Jagannath",
    category: "Sacred & Tranquil",
    img: "/tourist/mitrapur.png",
    description: "A beautiful and peaceful Jagannath temple located in the town of Mitrapur. It is known for its clean environment and serene spiritual atmosphere.",
    longDesc: "Mitrapur Jagannath Temple is a hidden gem for those who want to experience the Jagannath culture away from the crowds. The temple complex is beautifully maintained with gardens and traditional Kalinga architecture. It's a perfect place for meditation and experiencing the local religious fervor in a quiet setting.",
    distance: "38 km from Bagda Jungle Camp",
    bestTime: "Evening Aarti (6:30 PM)",
    duration: "1 Hour",
    highlights: ["Peaceful Environment", "Traditional Rituals", "Beautiful Gardens", "Kalinga Style Temple"],
    howToReach: "Located on the way to Panchalingeswar from Balasore."
  },
  "talasari-beach": {
    title: "Talasari-Udayapur Beach",
    category: "Serene Coastline",
    img: "/tourist/udayapur.png",
    description: "A calm beach known for its whistling Casuarina trees, red crabs, and the Subarnarekha river mouth. It's located right on the border of Odisha and West Bengal.",
    longDesc: "Talasari is where the river Subarnarekha meets the Bay of Bengal. The name 'Talasari' translates to 'Row of Palm trees'. The beach is vast and relatively untouched. During low tide, you can walk across the riverbed to reach the main sea. The presence of millions of red ghost crabs makes the golden sands appear red from a distance. It's a haven for photographers and peace-seekers.",
    distance: "120 km from Bagda Jungle Camp",
    bestTime: "Sunset is magical here",
    duration: "2-3 Hours",
    highlights: ["Subarnarekha River Mouth", "Red Ghost Crabs", "Palm & Casuarina Groves", "Boating Options"],
    howToReach: "A long drive from Bagda, usually combined with a visit to Digha."
  },
  "digha-beach": {
    title: "Digha Beach",
    category: "Lively Seaside Town",
    img: "/tourist/digha.png",
    description: "The most popular seaside resort town in West Bengal, just across the border from Odisha. It features a long coastline, a marine aquarium, and vibrant markets.",
    longDesc: "Digha is a bustling tourist destination known for its wide beaches and lively atmosphere. The 'New Digha' area has a beautiful seaside promenade, while the 'Old Digha' retains a more traditional feel. The Marine Aquarium and Research Centre is a major attraction here. The local markets are famous for cashew nuts, sea shell ornaments, and fresh fish fry.",
    distance: "125 km from Bagda Jungle Camp",
    bestTime: "Anytime (Very lively in the evening)",
    duration: "3-4 Hours",
    highlights: ["Marine Aquarium", "Beach Promenade", "Fresh Fish Fry", "Shopping Markets"],
    howToReach: "Accessible via the coastal road from Balasore/Jaleswar."
  },
  "dagara-beach": {
    title: "Dagara Beach",
    category: "Offbeat & Pristine",
    img: "/tourist/dagara.png",
    description: "One of the most unexplored and clean beaches in Odisha. It's famous for its red crabs, golden sand, and a completely tranquil atmosphere away from any city noise.",
    longDesc: "Dagara is a true hidden gem. Unlike popular beaches, Dagara is flat, broad, and extremely quiet. The rows of Casuarina trees provide a perfect backdrop for a picnic. It is one of the few places where the red crabs are so numerous that they cover the entire beach. If you are looking for a place where it's just you and the ocean, Dagara is the place to be.",
    distance: "15 km from Bagda Jungle Camp",
    bestTime: "Sunrise or Sunset",
    duration: "2 Hours",
    highlights: ["Extreme Tranquility", "Clean Golden Sand", "Casuarina Forests", "Crab Sightings"],
    howToReach: "Very close to Bagda. A short 30-minute drive through village roads."
  },
  "kuldiha-sanctuary": {
    title: "Kuldiha Wildlife Sanctuary",
    category: "Wildlife & Nature",
    img: "/tourist/kuldiha.png",
    description: "Nestled in the Nilgiri hills, Kuldiha is a vast expanse of lush greenery and diverse wildlife. It is particularly famous for its population of wild elephants and as a critical corridor for tiger movement.",
    longDesc: "Kuldiha Wildlife Sanctuary is a paradise for nature enthusiasts and wildlife photographers. Spread across 272 sq km, it features mixed deciduous forests dominated by Sal trees. The sanctuary is part of the Mayurbhanj Elephant Reserve and is connected to Similipal via the Hadgarh Wildlife Sanctuary. Guests can enjoy jungle safaris, birdwatching, and staying at the salt-lick points to observe wild elephants in their natural habitat. The Rishia Dam within the forest adds to the scenic beauty of the sanctuary.",
    distance: "55 km from Bagda Jungle Camp",
    bestTime: "October to May (Best for Elephant sightings)",
    duration: "Full Day Trip",
    highlights: ["Wild Elephant Sightings", "Rishia Dam & Reservoir", "Sal Forest Trekking", "Rich Bird Biodiversity"],
    howToReach: "Accessible by road from Nilgiri. We can help you arrange a forest-approved vehicle for the safari."
  },
  "padmabati-park": {
    title: "Padmabati Water Park & Resort",
    category: "Amusement & Fun",
    img: "/tourist/padmabati.png",
    description: "The ultimate family destination in Balasore, Padmabati offers a wide range of water slides, wave pools, and amusement rides for an unforgettable day of fun and excitement.",
    longDesc: "Padmabati Amusement Water Park is the perfect getaway for families and groups looking for a break from the routine. Featuring international-standard water slides, a massive wave pool, and a dedicated kids' play area, it ensures a day full of splashes and laughter. The resort also offers multi-cuisine dining options and beautifully landscaped gardens, making it one of the most popular recreational spots in Northern Odisha.",
    distance: "28 km from Bagda Jungle Camp",
    bestTime: "Full Day (10:00 AM - 5:00 PM)",
    duration: "4-6 Hours",
    highlights: ["Thrilling Water Slides", "Giant Wave Pool", "Rain Dance & DJ", "Kids Adventure Zone"],
    howToReach: "Located on the outskirts of Balasore. Easily reachable via private car or taxi from the camp."
  },
  "kasafal-muhana": {
    title: "Kasafal Muhana",
    category: "Nature & Birdwatching",
    img: "/tourist/kasafal.png",
    description: "A scenic estuary where the Kasafal river meets the Bay of Bengal. It is a peaceful spot perfect for nature walks and observing local bird species.",
    longDesc: "Kasafal Muhana is a spot for true nature lovers. The meeting point of the river and the sea creates a unique ecosystem that attracts many migratory birds. You can see local fishermen at work and enjoy the untouched beauty of the Odisha coastline. It's a very quiet spot, perfect for those who want to experience the raw beauty of nature without any commercial interference.",
    distance: "12 km from Bagda Jungle Camp",
    bestTime: "Late afternoon (4:00 PM - 6:00 PM)",
    duration: "1-2 Hours",
    highlights: ["River Estuary", "Bird Watching", "Fishermen Life", "Untouched Nature"],
    howToReach: "A very short drive from Bagda camp. Best visited by bike or car."
  }
};

const TouristDetails = () => {
  const { id } = useParams();
  const place = touristData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!place) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Attraction Not Found</h2>
        <Link to="/tourist" className="btn btn-primary mt-4">Back to Attractions</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <SEO
        title={`${place.title} - Balasore Tourism & Sightseeing`}
        description={`Plan a visit to ${place.title}. ${place.description} Explore the best places to visit in Balasore and Odisha.`}
        keywords={`Visit ${place.title}, ${place.title} Balasore, Balasore tourism, Sightseeing in Odisha, ${place.category}, Places to visit in Balasore${place.title.toLowerCase().includes('resort') || place.title.toLowerCase().includes('camp') ? ', Bagda Sea Beach Resort, Stay in Balasore' : ''}`}
        url={`/tourist/${id}`}
      />
      {/* Hero Section */}
      <section className="detail-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${place.img})` }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content-bottom"
          >
            <div className="hero-main-info">
              <h1>{place.title}</h1>
              <div className="quick-meta-white">
                <div className="meta-item"><MapPin size={18} /> <span>{place.distance}</span></div>
                <div className="meta-item"><Clock size={18} /> <span>{place.duration}</span></div>
              </div>
            </div>

            <div className="hero-actions-row">
              <Link to="/tourist" className="back-btn-white"><ArrowLeft size={20} /> Back to List</Link>
              <span className="category-tag-glass">{place.category}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-creme">
        <div className="container">
          <div className="tourist-details-layout">
            <div className="details-main-content">
              <div className="content-card info-card-premium">
                <div className="card-badge"><Info size={16} /> Overview</div>
                <h3>About the Place</h3>
                <p className="large-para">{place.description}</p>
                <div className="content-divider"></div>
                <p className="full-description">{place.longDesc}</p>
              </div>

              <div className="highlights-section-enhanced-compact mt-5">
                <div className="section-title-box">
                  <Camera size={24} className="text-accent" />
                  <h3>Experience Highlights</h3>
                </div>
                <div className="enhanced-highlights-grid">
                  {place.highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      className="highlight-card-v2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-icon-box">
                        <CheckCircle2 size={22} />
                      </div>
                      <div className="h-text">{item}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="details-sidebar">
              <div className="sidebar-card">
                <h4><Info size={20} /> Essential Info</h4>
                <div className="sidebar-info-item">
                  <Calendar size={18} />
                  <div>
                    <label>Best Time to Visit</label>
                    <span>{place.bestTime}</span>
                  </div>
                </div>
                <div className="sidebar-info-item">
                  <Navigation size={18} />
                  <div>
                    <label>How to Reach</label>
                    <span>{place.howToReach}</span>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(place.title + ' Balasore Odisha')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block mt-4"
                >
                  <MapPin size={18} /> View on Google Maps
                </a>
              </div>

              <div className="sidebar-card mt-4 stay-promo">
                <h4>Stay at Jungle Camp</h4>
                <p>Enjoy a comfortable stay in our premium tents and AC suites while exploring these beautiful places.</p>
                <Link to="/room" className="btn btn-secondary btn-block">Explore Our Rooms</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouristDetails;
