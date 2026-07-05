import React from 'react';
import { Wifi, Utensils, Coffee, Wind } from 'lucide-react';
import SEO from '../components/SEO';

const Amenities = () => {
  return (
    <div className="page-wrapper">
      <SEO 
        title="Premium Amenities - Bagda Sea Beach Jungle Camp"
        description="Discover the premium facilities at Bagda Sea Beach Resort. Enjoy high-speed WiFi, organic dining, zen spa, and private beach access in Balasore."
        keywords="Best facilities at Bagda Sea Beach Resort, Bagda camping amenities, Luxury eco camp features, Dublagadi Beach resort facilities"
        url="/amenities" 
      />
      <section className="page-header amenities-header">
        <div className="container">
          <h1>Resort Amenities</h1>
        </div>
      </section>

      <section className="section amenities-section">
        <div className="container">
          <div className="amenities-layout">
            <div className="amenities-content">
              <span className="sub-title">Premium Services</span>
              <h2>Curated Experiences <br />For Your Soul</h2>
              <p>From private beach access to gourmet dining, every detail is crafted to ensure your stay is nothing short of extraordinary.</p>

              <div className="amenities-grid">
                <div className="amenity-item">
                  <div className="icon-box"><Wifi /></div>
                  <h4>High-Speed WiFi</h4>
                </div>
                <div className="amenity-item">
                  <div className="icon-box"><Utensils /></div>
                  <h4>Organic Dining</h4>
                </div>
                <div className="amenity-item">
                  <div className="icon-box"><Coffee /></div>
                  <h4>Premium Cafe</h4>
                </div>
                <div className="amenity-item">
                  <div className="icon-box"><Wind /></div>
                  <h4>Zen Spa</h4>
                </div>
              </div>
            </div>
            <div className="amenities-image">
              <img src="/spa.png" alt="Spa Experience" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
