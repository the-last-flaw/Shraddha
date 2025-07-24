import React from 'react';
import './FloatingLilies.css';

const FloatingLilies = () => {
  const lilyImages = [
    "/images/offline/lily1.jpg",
    "/images/offline/lily2.jpg", 
    "/images/offline/lily3.jpg"
  ];

  return (
    <div className="floating-lilies-container">
      {Array.from({ length: 8 }, (_, index) => (
        <div
          key={index}
          className={`floating-lily lily-${index + 1}`}
          style={{
            backgroundImage: `url(${lilyImages[index % lilyImages.length]})`,
            animationDelay: `${index * 2}s`,
            left: `${10 + (index * 12)}%`,
            animationDuration: `${8 + (index % 3) * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLilies;