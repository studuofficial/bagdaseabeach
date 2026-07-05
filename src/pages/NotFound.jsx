import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Compass, Map } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <SEO
        title="Page Not Found - Bagda Sea Beach Jungle Camp"
        description="The page you are looking for does not exist."
        keywords="404, Page not found, Bagda Sea Beach"
        url="/404"
      />
      <div className="container">
        <div className="not-found-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="error-code"
          >
            404
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Lost in Paradise?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            The page you are looking for has drifted away like a message in a bottle. Let's get you back to the shore.
          </motion.p>

          <motion.div
            className="not-found-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/" className="btn btn-primary">
              <Home size={18} /> Back to Home
            </Link>
            <Link to="/tourist" className="btn btn-secondary">
              <Map size={18} /> Explore Attractions
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="floating-elements">
        <motion.div
          className="float-leaf leaf-1"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="float-leaf leaf-2"
          animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default NotFound;
