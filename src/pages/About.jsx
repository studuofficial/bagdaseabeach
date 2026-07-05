import React from 'react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="page-wrapper">
      <SEO
        title="About Bagda Sea Beach Jungle Camp - Our Story & Vision"
        description="Learn about the history and vision of Bagda Sea Beach Jungle Camp. We are dedicated to sustainable eco-tourism, preserving nature, and offering a luxurious stay in Balasore."
        keywords="About Bagda Sea Beach, Bagda Resort history, Eco tourism Odisha, Sustainable resort Balasore, Luxury eco camp"
        url="/about"
      />
      <section className="page-header about-header">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <div className="about-layout">
            <div className="about-image">
              <img src="/hero.png" alt="About Our Resort" />
            </div>
            <div className="about-text">
              <span className="sub-title">Our Story</span>
              <h2>A Sanctuary of Peace and Luxury</h2>
              <p>Bagda Sea Beach Resort is more than just a place to stay; it's an experience. Born from a passion for nature and hospitality, we offer a unique blend of coastal charm and modern sophistication.</p>
              <p>Our resort is dedicated to sustainable tourism, ensuring that our guests enjoy the beauty of Bagda Beach while we preserve its natural ecosystem for generations to come.</p>
              <p>With years of experience in luxury hospitality, we understand that true luxury lies in the details. From the thread count of our linens to the sourcing of our organic ingredients, everything is curated for your comfort.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
