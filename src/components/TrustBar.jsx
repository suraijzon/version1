'use client';
import React from 'react';

const stats = [
  { icon: '🏆', text: '150+ Projects Delivered' },
  { icon: '⭐', text: '4.9 Rated Agency' },
  { icon: '📈', text: '35% Avg Client Growth' },
  { icon: '🌍', text: 'UK & USA Focused' },
];

const TrustBar = () => {
  return (
    <section className="trust-bar">
      <p className="trust-bar-label" style={{ textAlign: 'center' }}>
        Trusted by 120+ businesses across UK, USA & Europe
      </p>
      <div
        className="trust-bar-stats"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          textAlign: 'center',
        }}
      >
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
