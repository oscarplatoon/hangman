import { useState } from "react"


function DisplayGuessedLetters(props) {
  const [endGame, setEndGame] = useState(false);

  const getWrongGuesses = () => {
    const wrongGuesses = props.guessedLetters
    .filter(letter => {
      return !(props.puzzle.includes(letter));
    })
    .map(letter => ' ' + letter)

    if (wrongGuesses.length > 6) {
      setEndGame(true);
    }

    return wrongGuesses;
  }

  return(
    <div>
      <hr />
      <h3>
        {endGame ?
         `You used all your guesses!` 
        : `Incorrect Guesses: ${getWrongGuesses()}`}
      </h3>
      <p> Guesses Remaining: {6 - getWrongGuesses().length}</p>
    </div>
  )
}

export default DisplayGuessedLetters; 