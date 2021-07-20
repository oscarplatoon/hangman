import { useState } from 'react';

function CountGuesses(props) {
    const [endGame, setEndGame] = useState(false);

    const getWrongGuesses = () => {
        const wrongGuesses = props.guessedLetters.filter(letter => {
            return !(props.puzzle.includes(letter));
        }).map(letter => ' ' + letter)

        if (wrongGuesses.length > 6) {
            setEndGame(true);
        }
        
        return wrongGuesses;
    }

    return (
        <div>
            <p>{endGame ? 'You used all your guesses' : `Incorrect Guesses:${getWrongGuesses()}`}</p>
            <p>Guesses remaining: {6 - getWrongGuesses().length}</p>
        </div>
    )
}

export default CountGuesses; 