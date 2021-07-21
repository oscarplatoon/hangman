import './App.css';
import wordList from "./components/Words"
import DisplayPuzzle from './components/DisplayPuzzle';
import GuessLetter from "./components/GuessLetter"
import DisplayGuessedLetters from './components/DisplayGuessedLetters';

import {useState} from "react"

function App() {
  const [puzzle, setPuzzle] = useState(wordList[Math.floor(Math.random() * wordList.length)].toLowerCase())
  const [guessedLetters, setGuessedLetter] = useState([])

  return (
    <div className="App">
      {console.log(puzzle)}
      <DisplayPuzzle word={puzzle} guessedLetters={guessedLetters} setGuessedLetter={setGuessedLetter} setPuzzle={setPuzzle}/>
      <GuessLetter guessedLetters={guessedLetters} setGuessedLetter={setGuessedLetter} puzzle={puzzle} setPuzzle={setPuzzle} />
      <DisplayGuessedLetters guessedLetters={guessedLetters} puzzle={puzzle}/>
    </div>
  );
}

export default App;
