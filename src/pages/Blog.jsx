import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ChevronRight } from 'lucide-react';

const Blog = () => {
  const blogs = [
    {
      id: "magic-of-bagda",
      title: "The Magic of Bagda Sea Beach",
      date: "May 10, 2026",
      excerpt: "Discover why Bagda is becoming the top destination for nature lovers in Odisha.",
      img: "/local/mamoe_beach.png"
    },
    {
      id: "places-near-balasore",
      title: "Top 5 Places to Visit Near Balasore",
      date: "May 05, 2026",
      excerpt: "From Panchalingeswar to Chandipur, explore the hidden gems of Northern Odisha.",
      img: "/tourist/panchalingeswar.png"
    },
    {
      id: "coastal-camping-guide",
      title: "A Guide to Coastal Camping",
      date: "April 28, 2026",
      excerpt: "Essential tips for a perfect camping experience at Bagda Jungle Camp.",
      img: "/local/boating.png"
    }
  ];

  return (
    <div className="page-container">
      <SEO
        title="Bagda Sea Beach Travel Guide & Blog - Discover Dublagadi"
        description="Read our latest travel guides, tips, and stories about Bagda Sea Beach and Balasore. Discover the best of Dublagadi beach camping."
        keywords="Bagda Sea Beach Travel Guide, Dublagadi Beach reviews, Balasore travel blog, Bagda camping stories, Odisha eco tourism blog"
        url="/blog"
      />
      <section className="page-hero" style={{ backgroundImage: "url('/local/mamoe_beach.png')" }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Stories & Travel Guides
          </motion.h1>
          <p>Insights, updates, and travel inspiration from the heart of Dublagadi.</p>
        </div>
      </section>

      <section className="section blog-list-section">
        <div className="container">
          <div className="blog-grid">
            {blogs.map((post, i) => (
              <motion.div
                key={i}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/blog/${post.id}`} className="blog-card-link">
                  <div className="blog-img">
                    <img src={post.img} alt={post.title} />
                  </div>
                  <div className="blog-content">
                    <span className="blog-date">{post.date}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="btn-text">Read More <ChevronRight size={16} /></span>
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

export default Blog;
