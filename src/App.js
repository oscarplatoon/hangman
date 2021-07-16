import './App.css';
import { useState } from 'react';
import Words from './data/Words';
import WordDisplay from './components/WordDisplay';
import SubmitForm from './components/SubmitForm';
import IncorrectGuesses from './components/IncorrectGuesses';

function App() {
    // Setting states
    let randomIndex = Math.floor(Math.random() * Words.length);
    let randomWord = Words[randomIndex];
    const [puzzle, setPuzzle] = useState(randomWord);
    const [guessedLetters, setGuessedLetters] = useState([]);

    const onCharSubmit = (char) => {
        if (guessedLetters.includes(char)) {
            alert(`You have guessed ${char} already!`)
            return
        }

        setGuessedLetters([
            ...guessedLetters,  // when using spread operator, make sure to put it in the appropriate data type (e.g. [], {}, etc.)
            char
        ]);
    }

    return (
        <div className="App">
            {console.log('puzzle:' + puzzle)}
            <WordDisplay puzzleWord={puzzle} guessedLetters={guessedLetters} />
            <IncorrectGuesses puzzleWord={puzzle} guessedLetters={guessedLetters} />
            <SubmitForm onCharSubmit={onCharSubmit} />
        </div>
    );
}

export default App;
