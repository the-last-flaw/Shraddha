import React, { useState } from 'react';
import './LocketBox.css';

const LocketBox = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setTimeout(() => {
        onOpen();
      }, 1200);
    }
  };

  return (
    <div className="locket-container">
      <div 
        className={`locket-box ${isOpening ? 'opening' : ''}`}
        onClick={handleClick}
      >
        <div className="locket-top">
          <div className="locket-hinge"></div>
          <div className="locket-surface">
            <div className="locket-pattern">
              <div className="golden-rose">
                <div className="rose-center"></div>
                <div className="rose-petals">
                  <div className="petal petal-1"></div>
                  <div className="petal petal-2"></div>
                  <div className="petal petal-3"></div>
                  <div className="petal petal-4"></div>
                  <div className="petal petal-5"></div>
                  <div className="petal petal-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="locket-bottom">
          <div className="locket-interior">
            <div className="interior-glow"></div>
            <p className="interior-text">Open with Love</p>
          </div>
        </div>
      </div>
      
      {!isOpening && (
        <p className="locket-instruction">Click to open the box of memories</p>
      )}
      
      <div className="sparkles">
        <div className="sparkle sparkle-1">✨</div>
        <div className="sparkle sparkle-2">⭐</div>
        <div className="sparkle sparkle-3">✨</div>
        <div className="sparkle sparkle-4">⭐</div>
      </div>
    </div>
  );
};

export default LocketBox;