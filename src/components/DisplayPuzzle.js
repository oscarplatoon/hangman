import React from 'react';
import wordList from "./Words"

const DisplayPuzzle = ({ word, guessedLetters, setPuzzle, setGuessedLetter }) => {
 
  // if a letter is not in guessed letters, replace it with _
  const displayGuess = () => {
    let displayWordArray = word.split("");
    for (let i = 0; i < word.length; i++) {
      if (guessedLetters.indexOf(word[i]) === -1) {
        displayWordArray[i] = "_";
      }
    }
    if (displayWordArray.indexOf("_") === -1) {
      alert('You won');
      setPuzzle(wordList[Math.floor(Math.random() * wordList.length)].toLowerCase());
      setGuessedLetter([]);
      return
    }
    return displayWordArray.join(" ")
  }

  return (
    <div>
      <h1> {displayGuess()} </h1>
    </div>
  );
};

export default DisplayPuzzle;

