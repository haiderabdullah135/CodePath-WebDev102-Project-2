// src/App.js
import React, { useState } from 'react';
import './App.css';
import Flashcard from './Flashcard';
import './Background.css'; 

function App() {
  const cardSet = {
    title: 'Did you know...',
    description: 'Learn something new about these artists!',
    flashcards: [
      {question: 'Illumanit Confirmed???', answer: 'Playboi Carti was born on the same exact day Tupac died.' },
      { question: 'What is the significance of the beat switch in Nights by Frank Ocean?', answer: 'It represents the halfway point in the album' },
      { question: 'How many songs are streamed annually?', answer: '1.2 trillion in 2018.' },
      { question: 'What is the average length of a song?', answer: '3 minutes and 42 seconds.' },
      { question: 'How much musicians earn hourly?', answer: 'On average $30.39' },
      { question: 'How much musicians earn hourly?', answer: 'On average $30.39' },
      { question: 'How many tracks are added to spotify everyday?', answer: '40,000' },
      // Add more flashcards here
    ],
  };

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    const newIndex = Math.floor(Math.random() * cardSet.flashcards.length);
    setCurrentCardIndex(newIndex);
  };

  const currentCard = cardSet.flashcards[currentCardIndex];

  return (
    <div className="App">
      <h1 className="title">{cardSet.title}</h1>
     <p className="description">{cardSet.description}</p>
      <div className="flashcard-container">
    {currentCard && <Flashcard question={currentCard.question} answer={currentCard.answer} />}
  </div>
  <button onClick={nextCard}>Next</button>
</div>

  );
}

export default App;
