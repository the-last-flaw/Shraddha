import React from 'react';
import LetterEnvelope from './LetterEnvelope';
import './LetterGrid.css';

const LetterGrid = ({ letters, onLetterSelect }) => {
  return (
    <div className="letter-grid">
      {letters.map((letter, index) => (
        <LetterEnvelope
          key={letter.id}
          letter={letter}
          index={index}
          onClick={() => onLetterSelect(letter.id)}
        />
      ))}
    </div>
  );
};

export default LetterGrid;