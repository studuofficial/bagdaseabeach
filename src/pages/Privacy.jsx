import React from 'react';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="page-container">
      <SEO
        title="Privacy Policy - Bagda Sea Beach Jungle Camp"
        description="Read the privacy policy of Bagda Sea Beach Jungle Camp. We protect your personal data during bookings and inquiries."
        keywords="Privacy policy, Bagda beach resort privacy, Data protection, Booking security"
        url="/privacy"
      />
      <section className="page-hero" style={{ backgroundImage: "url('/local/bhagha_jatin.png')" }}>
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last Updated: May 10, 2026</p>
        </div>
      </section>

      <section className="section legal-section">
        <div className="container">
          <div className="legal-content">
            <h3>Information We Collect</h3>
            <p>We collect personal information such as your name, contact number, and email address when you make a booking or inquiry on our website. We also collect ID details during check-in as per government regulations.</p>

            <h3>How We Use Your Information</h3>
            <p>Your information is used solely for booking confirmation, providing personalized services, and sending occasional updates or offers related to Bagda Sea Beach Resort. We do not sell your data to third parties.</p>

            <h3>Data Security</h3>
            <p>We implement industry-standard security measures to protect your personal data from unauthorized access or disclosure.</p>

            <h3>Cookies</h3>
            <p>Our website uses cookies to enhance user experience and analyze site traffic. You can choose to disable cookies in your browser settings.</p>

            <h3>Contact Us</h3>
            <p>If you have any questions regarding this Privacy Policy, please contact us at booking@bagdaseabeach.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
