import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Room from './pages/Room';
import RoomDetails from './pages/RoomDetails';
import Amenities from './pages/Amenities';
import TouristPlace from './pages/TouristPlace';
import TouristDetails from './pages/TouristDetails';
import Book from './pages/Book';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import WhatsAppButton from './components/WhatsAppButton';
import MobileNav from './components/MobileNav';
import SecurityManager from './components/SecurityManager';
import './App.css';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <SecurityManager>
        <div className="app-wrapper">
          <ScrollToTop />
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/room" element={<Room />} />
              <Route path="/room/:id" element={<RoomDetails />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/tourist" element={<TouristPlace />} />
              <Route path="/tourist/:id" element={<TouristDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/book" element={<Book />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <WhatsAppButton />
          <MobileNav />
          <Footer />
        </div>
      </SecurityManager>
    </Router>
  );
};

export default App;
