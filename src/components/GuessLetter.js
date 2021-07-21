import React, {useState} from 'react';
import wordList from "./Words"

const GuessLetter = ({guessedLetters, setGuessedLetter, puzzle, setPuzzle}) => {
  const [guess, setGuess] = useState("")

  const handleChange = (event) => {
    setGuess(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guessedLetters.indexOf(guess) === -1) {
      let newGuessLetters = [...guessedLetters, guess];
      setGuessedLetter(newGuessLetters);
    }
    else {
      alert(`${guess} has already been guessed!`);
    }

    if (guessedLetters.filter(item => puzzle.split("").indexOf(item) === -1).length > 6) {
      alert(`GAME OVER - the word was ${puzzle}`);
      setPuzzle(wordList[Math.floor(Math.random() * wordList.length)].toLowerCase());
      setGuessedLetter([]);
    }
  }

    return (
      <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={guess} pattern="[a-z]{1}" onChange={(e) => handleChange(e)} placeholder="Guess a lowercase letter" />
          <input type="submit" value="Submit" />
      </form>
    );

};

export default GuessLetter;

