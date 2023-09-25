// src/Flashcard.js
import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h3>Question</h3>
          <p>{question}</p>
        </div>
        <div className="flashcard-back">
          <h3>Answer</h3>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
