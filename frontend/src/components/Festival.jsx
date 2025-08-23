import React, { useState } from 'react';
import './Festival.css';

const Festival = () => {
  const images = {
    festivalImage1: '/images/festival/festival1.jpg',
    festivalImage2: '/images/festival/festival2.jpg',
    festivalImage3: '/images/festival/festival3.jpg',
    festivalImage4: '/images/festival/festival4.jpg',
    festivalImage5: '/images/festival/festival5.jpg',
    festivalImage6: '/images/festival/festival6.jpg',
    festivalImage7: '/images/festival/festival7.jpg',
    festivalImage8: '/images/festival/festival8.jpg',
    profilePic1: '/images/festival/profile-1.jpg',
    profilePic2: '/images/festival/profile-2.jpg',
    profilePic3: '/images/festival/profile-3.jpg',
    instaImage1: '/images/festival/insta-1.jpg',
    instaImage2: '/images/festival/insta-2.jpg',
    instaImage3: '/images/festival/insta-3.jpg',
    instaImage4: '/images/festival/insta-4.jpg',
    instaImage5: '/images/festival/insta-5.jpg',
    instaImage6: '/images/festival/insta-6.jpg',
    // NEW: Placeholder images for festivals by month
    lohriImage: '/images/festival/lohri.jpg',
    sankrantiImage: '/images/festival/Makar sankranti.jpg',
    basantImage: '/images/festival/Vasant Panchami.jpg',
    shivratriImage: '/images/festival/Mahashivratri.jpg',
    holiImage: '/images/festival/holi.jpg',
    gudipadwaImage: '/images/festival/gudipadwa.jpg',
    baisakhiImage: '/images/festival/baisakhi.jpg',
    bihuImage: '/images/festival/bihu.jpg',
    buddhaImage: '/images/festival/buddha.jpg',
    eidImage: '/images/festival/eid.jpg',
    hemisImage: '/images/festival/hemis.jpg',
    rathyatraImage: '/images/festival/rathyatra.jpg',
    teejImage: '/images/festival/teej.jpg',
    guruImage: '/images/festival/guru.jpg',
    rakshaImage: '/images/festival/raksha.jpg',
    janmashtamiImage: '/images/festival/janmashtami.jpg',
    ganeshImage: '/images/festival/ganesh.jpg',
    onamImage: '/images/festival/onam.jpg',
    durgapujaImage: '/images/festival/durgapuja.jpg',
    navaratriImage: '/images/festival/navaratri.jpg',
    diwaliImage: '/images/festival/diwali.jpg',
    nanakImage: '/images/festival/nanak.jpg',
    christmasImage: '/images/festival/christmas.jpg',
    nyeImage: '/images/festival/nye.jpg'
  };
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState('');
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleSubmitReview = () => {
    if (comment.trim() === '') {
      alert("Please write a review before submitting.");
      return;
    }
    fetch('http://localhost:5000/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reviewText: comment }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert(data.message);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("Failed to submit review.");
    });
    setComment('');
    setShowCommentBox(false);
  };
  
  const reviews = [
    {
      id: 1, name: "hakur", rating: 5, text: "Thanx a lot for the trip. The coordinators, Tenzin Dawa and Nawang are amazing, humble, and were helpful...", image: images.profilePic1, reviewImages: [images.festivalImage1, images.festivalImage2]
    },
    {
      id: 2, name: "Soyab Memon", rating: 5, text: "Thnx a lot thrilophilia, zindagi ke sabse yadgar trip and memory dene ke liye.", image: images.profilePic2, reviewImages: [images.festivalImage3, images.festivalImage4]
    },
    {
      id: 3, name: "Niraj Ga...", rating: 5, text: "Amazing trip......... Really memorable...", image: images.profilePic3, reviewImages: [images.festivalImage1, images.festivalImage3]
    },
  ];

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const instagramImages = [
    images.instaImage1, images.instaImage2, images.instaImage3, images.instaImage4, images.instaImage5, images.instaImage6,images.instaImage1, images.instaImage2, images.instaImage3, images.instaImage4, images.instaImage5, images.instaImage6
  ];
  
  // UPDATED: All festivals now have an image property
  const festivalsByMonth = [
    { month: "January", festivals: [
      { name: "Lohri", description: "A popular winter folk festival celebrated to mark the end of the harvest season.", date: "13-14 Jan", time: "All Day", image: images.lohriImage },
      { name: "Makar Sankranti", description: "A harvest festival dedicated to the deity Surya, marking the sun's entry into the zodiac sign of Makara.", date: "14-15 Jan", time: "All Day", image: images.sankrantiImage }
    ]},
    { month: "February", festivals: [
      { name: "Vasant Panchami", description: "A festival celebrating the goddess Saraswati and the arrival of spring.", date: "2 Feb", time: "Morning", image: images.basantImage },
      { name: "Mahashivratri", description: "A major Hindu festival celebrated in honor of Lord Shiva.", date: "18 Feb", time: "Evening", image: images.shivratriImage }
    ]},
    { month: "March", festivals: [
      { name: "Holi", description: "The festival of colors, celebrated with vibrant powders, music, and dance.", date: "8 Mar", time: "All Day", image: images.holiImage },
      { name: "Gudi Padwa", description: "The New Year festival for Maharashtrians and Konkanis.", date: "22 Mar", time: "Morning", image: images.gudipadwaImage }
    ]},
    { month: "April", festivals: [
      { name: "Baisakhi", description: "A harvest festival in Punjab, also celebrated as the Sikh New Year.", date: "14 Apr", time: "All Day", image: images.baisakhiImage },
      { name: "Bihu", description: "A set of three Assamese festivals celebrating farming and harvest.", date: "14 Apr", time: "All Day", image: images.bihuImage }
    ]},
    { month: "May", festivals: [
      { name: "Buddha Purnima", description: "Commemorates the birth, enlightenment, and death of Gautama Buddha.", date: "5 May", time: "All Day", image: images.buddhaImage },
      { name: "Eid al-Fitr", description: "Marks the end of Ramadan, the Islamic holy month of fasting.", date: "21-22 May", time: "Morning", image: images.eidImage }
    ]},
    { month: "June", festivals: [
      { name: "Hemis", description: "A two-day religious festival held at the Hemis Gompa monastery in Ladakh.", date: "27-28 Jun", time: "All Day", image: images.hemisImage },
      { name: "Rath Yatra", description: "A grand procession of chariots dedicated to Lord Jagannath.", date: "20 Jun", time: "Morning", image: images.rathyatraImage }
    ]},
    { month: "July", festivals: [
      { name: "Teej", description: "A festival primarily celebrated by women, dedicated to the Goddess Parvati.", date: "19 Aug", time: "Morning", image: images.teejImage },
      { name: "Guru Purnima", description: "A festival dedicated to spiritual and academic teachers.", date: "3 Jul", time: "All Day", image: images.guruImage }
    ]},
    { month: "August", festivals: [
      { name: "Raksha Bandhan", description: "A festival celebrating the bond between brothers and sisters.", date: "30 Aug", time: "All Day", image: images.rakshaImage },
      { name: "Janmashtami", description: "Celebrates the birth of Lord Krishna.", date: "6-7 Sep", time: "All Day", image: images.janmashtamiImage }
    ]},
    { month: "September", festivals: [
      { name: "Ganesh Chaturthi", description: "A ten-day festival dedicated to the elephant-headed god Ganesha.", date: "19 Sep", time: "All Day", image: images.ganeshImage },
      { name: "Onam", description: "A harvest festival celebrated in Kerala to welcome King Mahabali.", date: "29 Aug", time: "All Day", image: images.onamImage }
    ]},
    { month: "October", festivals: [
      { name: "Durga Puja", description: "A grand festival celebrating the goddess Durga and her victory over evil.", date: "20 Oct", time: "All Day", image: images.durgapujaImage },
      { name: "Navaratri", description: "A nine-night Hindu festival celebrated in honor of the divine goddess Durga.", date: "15 Oct", time: "All Day", image: images.navaratriImage }
    ]},
    { month: "November", festivals: [
      { name: "Diwali (Deepavali)", description: "The festival of lights, symbolizing the victory of light over darkness.", date: "12 Nov", time: "Evening", image: images.diwaliImage },
      { name: "Guru Nanak Jayanti", description: "Commemorates the birth of the first Sikh Guru, Guru Nanak Dev.", date: "27 Nov", time: "All Day", image: images.nanakImage }
    ]},
    { month: "December", festivals: [
      { name: "Christmas", description: "A Christian festival commemorating the birth of Jesus Christ.", date: "25 Dec", time: "All Day", image: images.christmasImage },
      { name: "New Year's Eve", description: "The final day of the Gregorian calendar, celebrated with fireworks and parties.", date: "31 Dec", time: "Night", image: images.nyeImage }
    ]},
  ];

  return (
    <div className="festival-page">
      {/* Hero Section: Festivals of India */}
      <section className="hero-section">
        <div className="section-header">
          <hr className="line" />
          <h2 className="section-title">Festivals of India</h2>
          <hr className="line" />
        </div>
        <div className="text-content">
          <p>To experience the festivals of India is to experience the grandeur and richness of the Indian cultural heritage. The festivals of India thrive in a culture of diversity, and the celebration of these festivals has become a time for cross-cultural exchanges. Filled with rituals, music, performances, culinary treats, and more, each festival presents its own fascinating history and unique charm. A large diversity of customs, traditions, and tales are also associated with festivals.</p>
          <p>Learn about the cultural diversity, customs and traditions, as well as the fascinating stories associated with the festivals presented in the categories below, or explore the vibrant festivals of the states by clicking on the map.</p>
        </div>
        <div className="image-grid">
          <div className="image-item"><img src={images.festivalImage1} alt="Festival" /></div>
          <div className="image-item"><img src={images.festivalImage2} alt="Festival" /></div>
          <div className="image-item"><img src={images.festivalImage3} alt="Festival" /></div>
          <div className="image-item"><img src={images.festivalImage4} alt="Festival" /></div>
        </div>
      </section>

      {/* Review Section: Customer Reviews */}
      <section className="review-section">
        <div className="review-header">
          <hr className="line" />
          <h2 className="section-title">People Love Our Ladakh Tours</h2>
          <hr className="line" />
        </div>
        <div className="reviews-content">
          <div className="rating-summary">
            <div className="stars">
              {/* ... */}
            </div>
            <p className="rating-value">4.5</p>
            <p className="review-count">47,903 Ladakh Reviews</p>
            <p className="countries">by customers from 65+ countries</p>
            <button
              className="add-review-btn"
              onClick={() => setShowCommentBox(!showCommentBox)}
            >
              Write a review
            </button>
            {showCommentBox && (
              <div className="comment-box">
                <textarea
                  placeholder="Type your review here..."
                  className="comment-textarea"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button
                  className="submit-review-btn"
                  onClick={handleSubmitReview}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
          <div className="review-carousel">
            <button className="nav-btn" onClick={prevReview}>&lt;</button>
            <div className="review-card-container">
              <div key={reviews[currentReviewIndex].id} className="review-card">
                <div className="card-top">
                  <div className="profile-info">
                    <img src={reviews[currentReviewIndex].image} alt={reviews[currentReviewIndex].name} className="profile-pic" />
                    <div className="user-details">
                      <h4>{reviews[currentReviewIndex].name}</h4>
                      <div className="user-rating"><span className="star-filled">★</span> <span>{reviews[currentReviewIndex].rating}</span></div>
                    </div>
                  </div>
                </div>
                <p className="review-text">{reviews[currentReviewIndex].text}</p>
                <div className="review-images">
                  {reviews[currentReviewIndex].reviewImages.map((img, index) => (
                    <img key={index} src={img} alt="review" className="review-photo" />
                  ))}
                </div>
              </div>
            </div>
            <button className="nav-btn" onClick={nextReview}>&gt;</button>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section: @Festivals */}
      <section className="instagram-section">
        <h2 className="instagram-heading">@Festivals</h2>
        <div className="instagram-grid">
          {instagramImages.map((img, index) => (
            <div key={index} className="instagram-item">
              <img src={img} alt="Festival" />
            </div>
          ))}
        </div>
      </section>
      
      {/* UPDATED: The Top Festivals section now displays images with a fallback check */}
      <section className="top-10-section">
        <div className="section-header">
          <hr className="line" />
          <h2 className="section-title">Top Festivals by Month</h2>
          <hr className="line" />
        </div>
        <div className="festivals-by-month-container">
          {festivalsByMonth.map((monthData, index) => (
            <div key={index} className="month-festivals">
              <h3>{monthData.month}</h3>
              <div className="festival-details-list">
                {monthData.festivals.map((festival, festIndex) => (
                  <div key={festIndex} className="festival-item">
                    {/* Check if an image path exists before rendering the <img> tag */}
                    {festival.image && (
                      <img src={festival.image} alt={festival.name} className="festival-image" />
                    )}
                    <div className="festival-info">
                      <h4>{festival.name}</h4>
                      <p className="festival-meta">
                        <span><i className="fa-solid fa-calendar"></i> {festival.date}</span>
                        <span><i className="fa-solid fa-clock"></i> {festival.time}</span>
                      </p>
                      <p className="festival-description">{festival.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Festivals</h3>
            <p>Festivals of India is a project dedicated to showcasing the rich cultural heritage and vibrant celebrations across the country.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><button>Home</button></li>
              <li><button>Festivals</button></li>
              <li><button>Blog</button></li>
              <li><button>Contact Us</button></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: contact@festivalsofindia.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Festivals of India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Festival;