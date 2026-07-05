import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ChevronRight } from 'lucide-react';

const TouristPlace = () => {
  const touristPlaces = [
    {
      id: "panchalingeswar-temple",
      title: "Panchalingeswar Temple",
      desc: "Famous for its five natural Shiva Lingas amidst a perennial stream on a lush hilltop.",
      img: "/tourist/panchalingeswar.png",
      tag: "Spiritual"
    },
    {
      id: "remuna-temple",
      title: "Remuna Khirachora Temple",
      desc: "12th-century Vaishnavite shrine famous for its architectural beauty and the legend of 'Khirachora'.",
      img: "/tourist/remuna.png",
      tag: "Heritage"
    },
    {
      id: "chandipur-beach",
      title: "Chandipur Beach",
      desc: "The 'Vanishing Sea' where the tide recedes 5km twice a day, a unique phenomenon.",
      img: "/tourist/chandipur.png",
      tag: "Beach"
    },
    {
      id: "similipal-sanctuary",
      title: "Similipal Sanctuary",
      desc: "A vast wildlife sanctuary and tiger reserve with stunning waterfalls and dense forests.",
      img: "/tourist/similipal.png",
      tag: "Nature"
    },
    {
      id: "nilgiri-hills",
      title: "Nilgiri Hills & Temple",
      desc: "Lush green hills and the ancient Nilgiri Jagannath Temple, offering panoramic views.",
      img: "/tourist/nilgiri.png",
      tag: "Nature/Sacred"
    },
    {
      id: "mitrapur-temple",
      title: "Mitrapur Jagannath",
      desc: "A beautiful Jagannath temple in the peaceful town of Mitrapur.",
      img: "/tourist/mitrapur.png",
      tag: "Sacred"
    },
    {
      id: "talasari-beach",
      title: "Talasari-Udayapur Beach",
      desc: "Serene beaches with red crabs and whistling casuarina trees on the border of Odisha.",
      img: "/tourist/udayapur.png",
      tag: "Beach"
    },
    {
      id: "digha-beach",
      title: "Digha Beach",
      desc: "A popular and lively seaside destination with a vast coastline and vibrant markets.",
      img: "/tourist/digha.png",
      tag: "Beach"
    },
    {
      id: "dagara-beach",
      title: "Dagara Beach",
      desc: "An offbeat, untouched beach with golden sands and thousands of red crabs.",
      img: "/tourist/dagara.png",
      tag: "Beach"
    },
    {
      id: "kuldiha-sanctuary",
      title: "Kuldiha Wildlife Sanctuary",
      desc: "A sprawling forest home to elephants, tigers, and a variety of exotic birds.",
      img: "/tourist/kuldiha.png",
      tag: "Nature"
    },
    {
      id: "padmabati-park",
      title: "Padmabati Water Park",
      desc: "A fun-filled destination featuring thrilling water slides, pools, and family entertainment.",
      img: "/tourist/padmabati.png",
      tag: "Fun & Adventure"
    },
    {
      id: "kasafal-muhana",
      title: "Kasafal Muhana",
      desc: "A scenic river estuary where the river meets the Bay of Bengal, perfect for birdwatching.",
      img: "/tourist/kasafal.png",
      tag: "Nature"
    }
  ];

  return (
    <div className="tourist-page">
      <SEO
        title="Best Places to Visit in Balasore & Nearby Attractions"
        description="Explore top tourist attractions in Balasore, including Panchalingeswar Temple, Chandipur Beach, and Similipal National Park."
        keywords="Places to visit in Balasore, Balasore tourist attractions, Panchalingeswar Temple tour, Chandipur beach tour, Odisha tourism, Sightseeing in Balasore"
        url="/tourist"
      />
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/bg/tourist_bg.png")' }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Tourist Attractions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explore the beautiful sights and sacred temples around Balasore.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tourist-grid">
            {touristPlaces.map((place, i) => (
              <motion.div
                key={i}
                className="tourist-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/tourist/${place.id}`} className="tourist-card-link">
                  <div className="tourist-img-box">
                    <img src={place.img} alt={place.title} />
                    <span className="tourist-tag">{place.tag}</span>
                  </div>
                  <div className="tourist-info">
                    <h3>{place.title}</h3>
                    <p>{place.desc}</p>
                    <span className="btn-text">View Details <ChevronRight size={16} /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouristPlace;
