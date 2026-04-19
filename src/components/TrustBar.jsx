'use client';
import React from 'react';
import '../styles/trustbar.css';

const stats = [
  { icon: '🏆', text: '150+ Projects Delivered' },
  { icon: '⭐', text: '4.9 Rated Agency' },
  { icon: '📈', text: '35% Avg Client Growth' },
  { icon: '🌍', text: 'UK & USA Focused' },
];

const TrustBar = () => {
  return (
    <section className="trust-bar">
      <p className="trust-bar-label">
        Trusted by 120+ businesses across UK, USA & Europe
      </p>
      <div className="trust-bar-stats">
        {stats.map((stat, i) => (
          <div key={i} className="trust-bar-item">
            <span className="trust-bar-icon">{stat.icon}</span>
            <span className="trust-bar-text">{stat.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
