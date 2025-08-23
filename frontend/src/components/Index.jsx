import React from 'react';
import './index.css';
import { FaPlayCircle, FaArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Index = () => {
  return (
    <>
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Travel Memories You'll Never Forget</h1>
              <p>
                From passionately serene escapes to vibrant adventures that leave lasting imprints, we promise every moment you share with us will be nothing short of extraordinary.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">Find Out More</button>
                <button className="btn btn-secondary">
                  <FaPlayCircle /> Play Demos
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://via.placeholder.com/400x400?text=Hero+Image" alt="Traveler" />
            </div>
          </div>
        </section>

        <section className="destination-section">
          <div className="container">
            <h2>Find Your Best Destination</h2>
            <p>We have more than 2,000 destination you can choose</p>
            <div className="destination-gallery">
              <div className="gallery-item">
                <img src="https://via.placeholder.com/300x300?text=Destination+1" alt="Destination 1" />
                <div className="overlay">Alvotion</div>
              </div>
              <div className="gallery-item">
                <img src="https://via.placeholder.com/300x300?text=Destination+2" alt="Destination 2" />
                <div className="overlay">Sea Coast</div>
              </div>
              <div className="gallery-item">
                <img src="https://via.placeholder.com/300x300?text=Destination+3" alt="Destination 3" />
                <div className="overlay">Mountain View</div>
              </div>
            </div>
          </div>
        </section>

        <section className="vacation-plan-section">
          <div className="container">
            <h2>Best Vacation Plan</h2>
            <p>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive tours.</p>
            <div className="plan-grid">
              <div className="plan-card">
                <img src="https://via.placeholder.com/200x150?text=Vacation+1" alt="Puna, Italy" />
                <h3>Puna, Italy</h3>
                <p>3146$</p>
                <p>7 Day Trip</p>
              </div>
              <div className="plan-card">
                <img src="https://via.placeholder.com/200x150?text=Vacation+2" alt="India, Delhi" />
                <h3>India, Delhi</h3>
                <p>3146$</p>
                <p>7 Day Trip</p>
              </div>
              <div className="plan-card">
                <img src="https://via.placeholder.com/200x150?text=Vacation+3" alt="UK, London" />
                <h3>UK, London</h3>
                <p>3146$</p>
                <p>7 Day Trip</p>
              </div>
              <div className="plan-card">
                <img src="https://via.placeholder.com/200x150?text=Vacation+4" alt="UK, Chicago" />
                <h3>UK, Chicago</h3>
                <p>3146$</p>
                <p>7 Day Trip</p>
              </div>
            </div>
            <button className="btn btn-see-more">See more</button>
          </div>
        </section>

        <section className="blog-section">
          <div className="container">
            <h2>Our Blog</h2>
            <p>An insight the incredible experience in the world</p>
            <div className="blog-grid">
              <div className="blog-image">
                <img src="https://via.placeholder.com/400x300?text=Blog+Image" alt="Blog" />
              </div>
              <div className="blog-post">
                <h3>Beautiful Kashmir Let's Travel</h3>
                <p>We are ready to help you build and also receive free travel advice and tips. We are also happy to provide, and also the best category recommendations from us. <a href="/blog-post">Read more...</a></p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>We Make World Travel Easy</h2>
              <p>
                Designing the globe effortlessly, we transform wanderlust dreams into seamless adventures. With us, the world is your playground. Start your journey with a single tap.
              </p>
              <a href="/tour-info">Explore our Tour <FaArrowRight /></a>
            </div>
            <div className="cta-image">
              <img src="https://via.placeholder.com/300x500?text=Phone+Mockup" alt="Mobile App" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <div className="footer-col">
              <h3>Company</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/blog">Our Blog</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Get Help</h3>
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Stay In Touch</h3>
              <div className="social-icons">
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://twitter.com"><FaTwitter /></a>
                <a href="https://instagram.com"><FaInstagram /></a>
                <a href="https://linkedin.com"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Daily Travel. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
