import './App.css';
import { useState} from 'react';
import Words from './words.js';
import DisplayPuzzle from './components/DisplayPuzzle.js'
import DisplayGuessedLetters from './components/DisplayGuessedLetters.js';
import React from 'react'
import CountGuesses from './components/CountGuesses';


const App = () => {
  const [guessedLetters, setGuessedLetters] = useState([])
  const [puzzle, setPuzzle] = useState(Words[Math.floor(Math.random() * Words.length)]);
  
let textInput = React.createRef();

function handleClick() {
  if(textInput.current.value.length !== 1) {
    alert("Hey, one letter at a time!")
    textInput.current.value = '';
    return null 
  } else {
  setGuessedLetters([...guessedLetters,textInput.current.value]);
  }
  textInput.current.value = '';
  return guessedLetters
}

const UserInput = () => {
  return (
      <div>
        <input ref={textInput} placeholder="Take a guess!" />
        <br/>
        <button onClick={handleClick}> Submit Your Guess </button>
      </div>
    )
}

  return (
    <div className="App">
      <h1> Welcome to Hangman! </h1>
      <CountGuesses puzzle={puzzle} guessedLetters={guessedLetters} />
      <DisplayPuzzle puzzle={puzzle} guessedLetters={guessedLetters} />
     {/* Display letter guesses that didn't work: */}
      {/* Text Input and a button to submit */}
      <div> 
        <UserInput />
      </div>
      <br/>
      <div> 
        <DisplayGuessedLetters guessedLetters={guessedLetters} />
      </div>
    </div>
  );
}

export default App;
