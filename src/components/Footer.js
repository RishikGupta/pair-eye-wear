import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Track My Order</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Education</h3>
          <ul>
            <li><a href="#">Pair Blog</a></li>
            <li><a href="#">Progressive Lenses Guide</a></li>
            <li><a href="#">Blue-Light Filtering Lenses Guide</a></li>
            <li><a href="#">Premium Lenses Guide</a></li>
            <li><a href="#">FSA & HSA Guide</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Give Back</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Our Patents</a></li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h3>Connect with Us</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="footer-links">
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
        <p>&copy; 2024 Pair Eyewear. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
