import React from 'react';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <div className="page-container">
      <SEO
        title="Terms & Conditions - Bagda Sea Beach Jungle Camp"
        description="Read the terms and conditions for booking and staying at Bagda Sea Beach Jungle Camp in Dublagadi, Balasore."
        keywords="Terms and conditions, Bagda beach resort policies, Booking rules, Balasore camping terms"
        url="/terms"
      />
      <section className="page-hero" style={{ backgroundImage: "url('/local/boating.png')" }}>
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>Effective Date: January 1, 2026</p>
        </div>
      </section>

      <section className="section legal-section">
        <div className="container">
          <div className="legal-content">
            <h3>1. Booking Policy</h3>
            <p>All bookings at Bagda Sea Beach Jungle Camp are subject to availability. A valid ID proof (Aadhar Card/Voter ID/Passport) is mandatory for all guests at the time of check-in.</p>

            <h3>2. Cancellation & Refunds</h3>
            <p>Cancellations made 48 hours prior to check-in are eligible for a full refund. Cancellations within 48 hours will incur a 50% charge of the first night's stay.</p>

            <h3>3. Resort Rules</h3>
            <p>Guests are expected to maintain the decorum of the resort. Littering on the beach or within the jungle camp area is strictly prohibited. We are an eco-friendly resort and encourage guests to minimize plastic use.</p>

            <h3>4. Liability</h3>
            <p>The resort is not responsible for the loss or damage of personal belongings. Guests are advised to use the lockers or keep valuables secure.</p>

            <h3>5. Changes to Terms</h3>
            <p>We reserve the right to modify these terms at any time. Continued use of our services implies acceptance of the updated terms.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
