import { useState } from 'react';

function IncorrectGuesses({ puzzleWord, guessedLetters }) {
    const [gameOver, setGameOver] = useState(false);

    const getWrongGuesses = () => {
        const wrongGuesses = guessedLetters.filter(letter => {
            return !(puzzleWord.includes(letter));
        }).map(letter => ' ' + letter)

        if (wrongGuesses.length > 6) {
            setGameOver(true);
        }

        return wrongGuesses;
    }

    return (
        <div>
            <p>{gameOver ? 'Game Over!' : `Wrong Guesses:${getWrongGuesses()}`}</p>  {/* Displaying arrays using template literals will automatically put a comma btwn the values! */}
        </div>
    )
}

export default IncorrectGuesses;