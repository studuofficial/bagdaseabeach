import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const FAQ = () => {
  const faqs = [
    {
      q: "What are the check-in and check-out times?",
      a: "Check-in is from 12:00 PM onwards, and check-out is by 11:00 AM. Early check-in or late check-out is subject to availability."
    },
    {
      q: "Is there car parking available at the resort?",
      a: "Yes, we provide free and secure parking space for all our guests within the resort premises."
    },
    {
      q: "Do you offer food and dining services?",
      a: "Absolutely! We have an in-house restaurant serving fresh local seafood, traditional Odia cuisine, and popular Indian dishes."
    },
    {
      q: "How far is the resort from Balasore Railway Station?",
      a: "We are located approximately 35 km from Balasore Railway Station. We also provide pickup and drop facilities on request."
    },
    {
      q: "Is Bagda Sea Beach safe for night camping?",
      a: "Yes, our Jungle Camp is highly secure with 24/7 staff presence and boundary fencing, ensuring a safe and memorable camping experience."
    },
    {
      q: "How can I book a stay at Bagda Sea Beach Jungle Camp?",
      a: "You can easily book your stay directly through our website by filling out the reservation form, or by contacting our support team via WhatsApp and phone. We strongly recommend booking in advance for weekends."
    },
    {
      q: "What is the best time to visit Bagda Beach in Odisha?",
      a: "The most pleasant time to visit Bagda Sea Beach is between October and March. The winter weather is cool and perfect for beach walks, sightseeing tours, and enjoying our evening bonfires."
    },
    {
      q: "Is Bagda Sea Beach Resort safe for couples and families?",
      a: "Absolutely. Bagda Jungle Camp is a premium, highly secure, and private property with 24/7 staff and CCTV surveillance, making it a completely safe and family-friendly eco-resort."
    },
    {
      q: "Is Bagda Jungle Camp a pet-friendly resort?",
      a: "Yes, we are a fully pet-friendly resort! We welcome your well-behaved furry companions. Please inform us during the booking process so we can make the necessary arrangements for your pets."
    },
    {
      q: "What adventure activities and things to do are available?",
      a: "Guests can enjoy a wide array of activities including beach volleyball, evening bonfires with music, forest nature walks, local village tours, and guided sightseeing trips to nearby attractions like Panchalingeswar."
    },
    {
      q: "Do you offer Air Conditioned (AC) rooms or only camping tents?",
      a: "We offer a diverse range of accommodations to suit all preferences and budgets, including Premium AC Suites, Eco Non-AC Rooms, Romantic Couple Suites, and our signature Adventure Luxury Tents."
    },
    {
      q: "Are alcohol and outside food allowed inside the resort?",
      a: "We feature an excellent in-house restaurant catering to all your dining needs, so outside food is not permitted. Guests may bring and consume personal beverages responsibly within their private accommodation limits."
    },
    {
      q: "What is the nearest airport to Bagda Sea Beach?",
      a: "The nearest major airport is Netaji Subhash Chandra Bose International Airport in Kolkata (CCU), which is roughly 220 km away. Biju Patnaik International Airport in Bhubaneswar (BBI) is approximately 240 km away."
    },
    {
      q: "Do you provide Wi-Fi internet access at the camp?",
      a: "Yes, we provide complimentary high-speed Wi-Fi in common areas and most rooms, ensuring you stay connected for work or sharing your beautiful vacation memories online."
    },
    {
      q: "How is the mobile network and 5G coverage at Bagda Beach?",
      a: "Major networks like Jio and Airtel offer decent connectivity in the area. Due to our serene forest setting, network strength can occasionally fluctuate, offering a wonderful excuse for a relaxing digital detox!"
    }
  ];

  return (
    <div className="page-container">
      <SEO 
        title="Frequently Asked Questions - Bagda Sea Beach Jungle Camp"
        description="Find answers to all your questions about Bagda Sea Beach Resort. Information on booking, amenities, location, safety, and eco-friendly camping in Balasore."
        keywords="Bagda Sea Beach FAQs, How to reach Bagda Beach, Bagda camping questions, Bagda beach resort information, Dublagadi beach camp rules"
        url="/faq" 
      />
      <section className="page-hero" style={{ backgroundImage: "url('/bg/faq_bg.png')" }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <p>Everything you need to know about your stay at Bagda Sea Beach Jungle Camp.</p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="faq-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
