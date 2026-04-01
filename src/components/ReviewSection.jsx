import React from 'react';
import CountUp from 'react-countup';
import '../styles/Review.css';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      text: "Our e-commerce platform transformed our business. The team's expertise in custom web solutions helped us scale faster and reach a global audience.",
      name: "Sarah Thompson",
      username: "@sarah_thompson",
      bgColor: "#ffe4e1"
    },
    {
      id: 2,
      text: "The mobile app they developed for us has been a game-changer. It's fast, intuitive, and perfectly aligned with our brand vision. Highly recommend!",
      name: "David Martinez",
      username: "@david_martinez",
      bgColor: "#e8f5e9"
    },
    {
      id: 3,
      text: "Excellent IT resource outsourcing service. They provided highly skilled developers who integrated seamlessly with our team.",
      name: "zonzoc",
      username: "@zonzoc",
      bgColor: "#b2ebf2"
    },
    {
      id: 4,
      text: "Great experience working with the team. Delivery was fast and communication was excellent throughout the project.",
      name: "Emily Carter",
      username: "@emily_carter",
      bgColor: "#f3e5f5"
    }
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">

        {/* TOP SECTION */}
        <div className="reviews-top">

          {/* LEFT - RATING */}
          <div className="reviews-left">
            <h1 className="rating-number">4.9</h1>

            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>

            <div className="reviews-count">
              <CountUp start={0} end={115} duration={2} />+ Reviews
            </div>
          </div>

          {/* RIGHT - HEADING */}
          <div className="reviews-heading-wrap">
            <h2 className="reviews-heading">
              Our Customers <br /> love us
            </h2>
          </div>

        </div>

        {/* CARDS */}
        <div className="review-cards-grid">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-card"
              style={{ backgroundColor: review.bgColor }}
            >
              <div className="quote">"</div>

              <div className="card-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>

              <p className="review-text">{review.text}</p>

              <div className="reviewer">
                <p className="name">{review.name}</p>
                <p className="username">{review.username}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;