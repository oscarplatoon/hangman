import React from 'react';

const DisplayGuessedLetters = ({guessedLetters, puzzle}) => {
  
  const renderGuessedLetters = () => {
    const guessedLettersNotInPuzzle = guessedLetters.filter(item => puzzle.split("").indexOf(item) === -1);
    // console.log(puzzle.split("").indexOf(guessedLetters[guessedLetters.length - 1 ]))
    return guessedLettersNotInPuzzle.map((ltr, index) => {return <span key={`guess-${index}`}>{ltr}&nbsp;</span>})
  }
  
  return (
    <div>
      <br />
      <br />
      { renderGuessedLetters() }
    </div>
  );
};

export default DisplayGuessedLetters;