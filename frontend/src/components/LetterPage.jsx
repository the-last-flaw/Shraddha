import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FloatingLilies from './FloatingLilies';
import { mockLetters } from '../data/mockData';
import './LetterPage.css';

const LetterPage = () => {
  const { letterId } = useParams();
  const navigate = useNavigate();
  const [letter, setLetter] = useState(null);
  const [isOpening, setIsOpening] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const foundLetter = mockLetters.find(l => l.id === letterId);
    if (foundLetter) {
      setLetter(foundLetter);
      
      // Animation sequence
      setTimeout(() => {
        setIsOpening(false);
        setTimeout(() => {
          setShowContent(true);
        }, 600);
      }, 1000);
    } else {
      navigate('/');
    }
  }, [letterId, navigate]);

  if (!letter) {
    return <div className="loading">Loading your letter...</div>;
  }

  return (
    <div className="letter-page">
      <FloatingLilies />
      
      <div className="letter-container">
        <button 
          className="back-button elegant-button"
          onClick={() => navigate('/')}
        >
          ← Back to Letters
        </button>

        <div className={`letter-envelope-large ${isOpening ? 'opening' : 'opened'}`}>
          <div className="envelope-back-large"></div>
          <div className="envelope-front-large">
            <div className="envelope-flap-large"></div>
            <div className="wax-seal-large">
              <div className="seal-center-large">❤️</div>
            </div>
          </div>
        </div>

        {showContent && (
          <div className="letter-content">
            <div className="letter-paper">
              <div className="paper-header">
                <h1 className="letter-main-title">{letter.title}</h1>
                <div className="letter-date">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
              
              <div className="letter-body">
                <p className="letter-greeting">My dearest love,</p>
                
                <div className="letter-text">
                  {letter.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="letter-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="letter-signature">
                  <p className="signature-text">Forever yours,</p>
                  <p className="signature-name">dev 💕</p>
                </div>
              </div>
              
              <div className="paper-decorations">
                <div className="corner-rose corner-rose-1">🌹</div>
                <div className="corner-rose corner-rose-2">🌹</div>
                <div className="corner-rose corner-rose-3">🌹</div>
                <div className="corner-rose corner-rose-4">🌹</div>
              </div>
            </div>
            
            {letter.hasAudio && (
              <div className="audio-controls">
                <button className="audio-button elegant-button">
                  🎵 Play Voice Message
                </button>
              </div>
            )}
            
            {letter.hasVideo && (
              <div className="video-controls">
                <button className="video-button elegant-button">
                  📹 Watch Video Message
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LetterPage;