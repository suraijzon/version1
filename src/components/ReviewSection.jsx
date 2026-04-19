'use client';
import React from 'react';
import '../styles/Review.css';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      text: "Working with ZonzocTech transformed our online store completely. Traffic doubled and conversions improved significantly within 3 months.",
      name: "Sarah Thompson",
      username: "E-commerce Business Owner, UK",
      bgColor: "#ffe4e1"
    },
    {
      id: 2,
      text: "The mobile app they built for us is fast, intuitive and perfectly aligned with our brand. Highly recommend their team.",
      name: "David Martinez",
      username: "SaaS Founder, USA",
      bgColor: "#e8f5e9"
    },
    {
      id: 4,
      text: "Excellent communication throughout the project. Fast delivery, no surprises, and the results speak for themselves.",
      name: "Emily Carter",
      username: "Marketing Director, UK",
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
              50+ Client Reviews
            </div>
          </div>

          {/* RIGHT - HEADING */}
          <div className="reviews-heading-wrap">
            <h2 className="reviews-heading">
              What Our Clients Say
            </h2>
            <p>Don't take our word for it. Here's what businesses we've worked with across the UK and USA have to say.</p>
          </div>

        </div>

        {/* CARDS */}
        <div className="review-cards-grid">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-card"
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