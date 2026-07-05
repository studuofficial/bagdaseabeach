import React, { useEffect } from 'react';

const SecurityManager = ({ children }) => {
  useEffect(() => {
    // 1. Disable Right Click (Prevents casual inspection/stealing)
    const handleContextMenu = (e) => {
      // e.preventDefault(); 
      // Commented out to not annoy power users, but we can enable if client insists
    };

    // 2. Console Warning (Self-XSS Protection)
    const warningMessage = () => {
      console.log(
        '%cSTOP!',
        'color: red; font-size: 50px; font-weight: bold; text-shadow: 2px 2px black;'
      );
      console.log(
        '%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to "hack" someone\'s account, it is a scam and will give them access to your account.',
        'font-size: 20px; color: #333;'
      );
    };
    warningMessage();

    // 3. Basic Input Sanitization helper
    window.sanitizeInput = (str) => {
      return str.replace(/[&<>"']/g, (m) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      })[m]);
    };

    // 4. Prevent Frame Embedding (Clickjacking Protection - Runtime)
    if (window.self !== window.top) {
      window.top.location = window.self.location;
    }

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return <>{children}</>;
};

export default SecurityManager;
