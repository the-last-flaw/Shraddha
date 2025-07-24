import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LocketBox from './LocketBox';
import LetterGrid from './LetterGrid';
import FloatingLilies from './FloatingLilies';
import { mockLetters } from '../data/mockData';
import './HomePage.css';

const HomePage = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [showLetters, setShowLetters] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isBoxOpen) {
      const timer = setTimeout(() => {
        setShowLetters(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isBoxOpen]);

  const handleBoxOpen = () => {
    setIsBoxOpen(true);
  };

  const handleLetterSelect = (letterId) => {
    navigate(`/letter/${letterId}`);
  };

  return (
    <div className="home-page">
      <FloatingLilies />
      
      <div className="home-content">
        {!isBoxOpen ? (
          <div className="welcome-section">
            <h1 className="app-title">Open When...</h1>
            <p className="app-subtitle">A Timeless Box of Love</p>
            <LocketBox onOpen={handleBoxOpen} />
          </div>
        ) : (
          <div className="letters-section">
            <div className="letters-header">
              <h2 className="letters-title">Choose Your Letter</h2>
              <p className="letters-subtitle">Open when your heart needs to hear these words</p>
            </div>
            {showLetters && (
              <LetterGrid 
                letters={mockLetters} 
                onLetterSelect={handleLetterSelect}
              />
            )}
          </div>
        )}
      </div>

      {/* Background music controls */}
      <div className="music-controls">
        <button className="music-btn">
          <span>🎵</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;