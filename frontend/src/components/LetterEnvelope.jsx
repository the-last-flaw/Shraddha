import React, { useState } from 'react';
import './LetterEnvelope.css';

const LetterEnvelope = ({ letter, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`letter-envelope ${letter.category}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="envelope-back"></div>
      <div className="envelope-front">
        <div className="envelope-flap"></div>
        <div className="wax-seal">
          <div className="seal-center">❤️</div>
        </div>
      </div>
      
      <div className="envelope-content">
        <h3 className="letter-title">{letter.title}</h3>
        <p className="letter-preview">{letter.preview}</p>
        <div className="letter-category-badge">
          <span className="category-icon">{letter.icon}</span>
          <span className="category-name">{letter.categoryName}</span>
        </div>
      </div>
      
      {isHovered && (
        <div className="floating-lilies">
          <div className="mini-lily lily-1">🤍</div>
          <div className="mini-lily lily-2">🤍</div>
          <div className="mini-lily lily-3">🤍</div>
        </div>
      )}
    </div>
  );
};

export default LetterEnvelope;