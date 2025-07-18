import React from 'react';

const ShootingStars: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="shooting-stars">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="shooting-star" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1 + Math.random() * 2}s`
          }}></div>
        ))}
      </div>
    </div>
  );
};

export default ShootingStars;