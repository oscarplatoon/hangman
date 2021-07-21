import './App.css';
import React, { useState } from 'react';
import Words from './words.js';
import DisplayPuzzle from './components/DisplayPuzzle.js'
import DisplayGuessedLetters from './components/DisplayGuessedLetters.js';


function App (props) {
  const [guessedLetters, setGuessedLetters] = useState([])
  const [puzzle, setPuzzle] = useState(Words[Math.floor(Math.random() * Words.length)]);

  let textInput = React.createRef();

  function handleClick() {
    let inputText = textInput.current.value
    if (inputText.length > 1) {
      alert("Hey, one letter at a time!")
      textInput.current.value = '';
      return null
    } else if (inputText.length === 0) {
      alert("Hey, you can't just submit nothin'!")
      return null
    } else if (guessedLetters.includes(inputText)) {
      alert('You guessed that already!')
      return null
    } else {
      setGuessedLetters([...guessedLetters,inputText]);
    }
    textInput.current.value = '';
    console.log(guessedLetters)
    return guessedLetters
  }

const UserInput = () => {
  return (
      <div>
        <input ref={textInput} placeholder="Take a guess!" />
        <br/>
        <button onClick={handleClick}>
           Submit Your Guess 
        </button>
      </div>
    )
}

  return (
    <div className="App">
      <h1> Welcome to the Diet Edition Hangman! </h1>
      <h4> Some of the function, none of the fun! </h4>
     {/* Display letter guesses that didn't work: */}
      <div> 
        <DisplayGuessedLetters puzzle={puzzle} guessedLetters={guessedLetters} />
      </div>
     {/* Display a puzzle word letters separated by spaces blanks for unknown: */}
      <DisplayPuzzle puzzle={puzzle} guessedLetters={guessedLetters} />
      {/* Text Input and a button to submit */}
      <div> 
        <UserInput />
      </div>
      <br/>
    </div>
  );
}

export default App;