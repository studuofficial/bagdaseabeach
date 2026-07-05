import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag } from 'lucide-react';

const blogData = {
  "magic-of-bagda": {
    title: "The Magic of Bagda Sea Beach",
    date: "May 10, 2026",
    author: "Resort Manager",
    readTime: "5 min read",
    img: "/local/mamoe_beach.png",
    category: "Travel Guide",
    content: `
      <p>Bagda Sea Beach, also known as the Dublagadi Beach, is a hidden gem tucked away in the Balasore district of Odisha. Unlike the more commercialized beaches like Puri or Digha, Bagda offers a pristine and tranquil environment that feels like a private paradise.</p>
      
      <h3>The Golden Sands and Casuarina Trees</h3>
      <p>The first thing you notice when you arrive at Bagda is the endless stretch of golden sand lined with dense rows of Casuarina trees. The whistling of the wind through these trees creates a natural symphony that immediately calms your mind. It's the perfect spot for long walks, meditation, or simply sitting and watching the horizon.</p>
      
      <p>What makes Bagda truly magical is its solitude. You can walk for kilometers without seeing another soul, except for the tiny red crabs scurrying across the shore. It's one of the few places in India where you can truly disconnect from the digital world and reconnect with nature.</p>
      
      <h3>Sunrise and Sunset: A Painter's Dream</h3>
      <p>If you are an early riser, the sunrise at Bagda is something you cannot miss. The sky turns into a canvas of oranges, pinks, and purples as the sun emerges from the Bay of Bengal. Similarly, the evening sky is equally dramatic, making it a paradise for photographers.</p>
      
      <p>Whether you are a solo traveler, a couple looking for a romantic getaway, or a family seeking some peace, the magic of Bagda will leave an indelible mark on your heart.</p>
    `
  },
  "places-near-balasore": {
    title: "Top 5 Places to Visit Near Balasore",
    date: "May 05, 2026",
    author: "Local Guide",
    readTime: "8 min read",
    img: "/tourist/panchalingeswar.png",
    category: "Sightseeing",
    content: `
      <p>Balasore is not just an industrial town; it's a gateway to some of the most beautiful and spiritual sites in Odisha. If you are staying at Bagda Sea Beach, here are the top five places you must include in your itinerary.</p>
      
      <h3>1. Panchalingeswar Temple</h3>
      <p>Located on the lush green Nilgiri hills, this temple is famous for the five natural Shiva Lingas submerged in a perennial stream. The trek up the hill is refreshing and the spiritual vibes are unmatched.</p>
      
      <h3>2. Chandipur Beach</h3>
      <p>Famous as the 'Hide and Seek Beach', Chandipur is unique because the sea recedes up to 5 kilometers during low tide. You can literally walk on the seabed!</p>
      
      <h3>3. Remuna Khirachora Gopinath Temple</h3>
      <p>A 12th-century shrine famous for its delicious 'Amruta Keli' (sweet milk pudding). The architecture and the peaceful environment are worth the visit.</p>
      
      <h3>4. Similipal National Park</h3>
      <p>A paradise for wildlife lovers. Home to tigers, elephants, and some of the most beautiful waterfalls in India like Barehipani and Joranda.</p>
      
      <h3>5. Kuldiha Wildlife Sanctuary</h3>
      <p>If you want to see wild elephants in their natural habitat, Kuldiha is the place to be. The dense Sal forests and the Rishia Dam offer a perfect escape into the wild.</p>
    `
  },
  "coastal-camping-guide": {
    title: "A Guide to Coastal Camping",
    date: "April 28, 2026",
    author: "Adventure Expert",
    readTime: "6 min read",
    img: "/local/boating.png",
    category: "Adventure",
    content: `
      <p>Camping by the sea is a dream for many, but it requires some planning to make it perfect. At Bagda Jungle Camp, we provide the ultimate coastal camping experience. Here is your essential guide.</p>
      
      <h3>Packing Essentials</h3>
      <p>While we provide most amenities, we recommend carrying comfortable cotton clothing, a good sunscreen, hats, and power banks. Don't forget your camera to capture the stunning night sky!</p>
      
      <h3>Eco-Friendly Camping</h3>
      <p>The beauty of Bagda depends on us. We follow a strict 'No Litter' policy. Always dispose of waste in designated bins and avoid using plastic near the beach area. Let's keep our paradise clean.</p>
      
      <h3>Activities to Enjoy</h3>
      <p>From beach volleyball and bonfire nights to birdwatching and local village tours, there is never a dull moment. We also recommend trying the local seafood, freshly caught and prepared by our camp chefs.</p>
      
      <p>Waking up to the sound of waves and having your morning tea under the shade of Casuarina trees is an experience you will cherish forever.</p>
    `
  }
};

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: `Check out this amazing story about Bagda: ${post.title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard! You can now share it.');
    }
  };

  if (!post) {
    return (
      <div className="container section" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Post Not Found</h2>
        <Link to="/blog" className="btn btn-primary mt-4">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <SEO
        title={`${post.title} - Bagda Sea Beach Travel Blog`}
        description={`Read about ${post.title}. Discover travel tips and stories from Bagda Sea Beach and Balasore.`}
        keywords={`Bagda Sea Beach Travel Guide, ${post.title}, Dublagadi Beach, Balasore travel blog`}
        url={`/blog/${id}`}
      />
      <section className="blog-detail-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${post.img})` }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="blog-hero-content"
          >
            <span className="blog-category-badge">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blog-meta">
              <div className="meta-item"><Calendar size={18} /> <span>{post.date}</span></div>
              <div className="meta-item"><User size={18} /> <span>{post.author}</span></div>
              <div className="meta-item"><Clock size={18} /> <span>{post.readTime}</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-creme">
        <div className="container">
          <div className="blog-content-wrapper">
            <div className="blog-main-article">
              <Link to="/blog" className="back-link-classic"><ArrowLeft size={18} /> Back to Blog</Link>
              <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>

              <div className="article-footer">
                <div className="tags-box">
                  <Tag size={18} />
                  <span>Travel</span> <span>Odisha</span> <span>Nature</span>
                </div>
                <button className="btn-share" onClick={handleShare}>
                  <Share2 size={18} /> Share Post
                </button>
              </div>
            </div>

            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h4>Recent Stories</h4>
                <div className="recent-posts-list">
                  {Object.entries(blogData).filter(([key]) => key !== id).map(([key, item]) => (
                    <Link key={key} to={`/blog/${key}`} className="recent-post-item">
                      <img src={item.img} alt={item.title} />
                      <div>
                        <h5>{item.title}</h5>
                        <span>{item.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="sidebar-widget promo-widget">
                <h3>Visit Bagda Today</h3>
                <p>Plan your escape to the most beautiful beach in Northern Odisha.</p>
                <Link to="/room" className="btn btn-primary btn-block">Book Your Stay</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
