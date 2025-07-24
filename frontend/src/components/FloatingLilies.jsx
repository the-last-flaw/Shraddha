import React from 'react';
import './FloatingLilies.css';

const FloatingLilies = () => {
  const lilyImages = [
    "https://images.unsplash.com/photo-1615145456067-0b01d50475be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxpbGllc3xlbnwwfHx8d2hpdGV8MTc1MzM4MDAyN3ww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1721275690341-d236f5946c3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHx3aGl0ZSUyMGxpbGllc3xlbnwwfHx8d2hpdGV8MTc1MzM4MDAyN3ww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1659111377743-8302029e4029?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHx3aGl0ZSUyMGxpbGllc3xlbnwwfHx8d2hpdGV8MTc1MzM4MDAyN3ww&ixlib=rb-4.1.0&q=85"
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