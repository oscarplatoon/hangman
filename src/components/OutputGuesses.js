import { useEffect, useState } from "react"
import EGameStatus from "./types/gameStatus"

function OutputGuesses(props) {
    // states
    const [incorrectGuesses, setIncorrectGuesses] = useState([])

    // updates
    useEffect(() => {
        let newIncorrectGuesses = props.guessedLetters.filter((letter) => {
            return !props.puzzleWord.includes(letter)
        })

        setIncorrectGuesses(newIncorrectGuesses)
    }, [props.puzzleWord, props.guessedLetters])

    useEffect(() => {
        if (incorrectGuesses.length >= props.maxIncorrectGuesses) {
            props.alterGameStatusHandler(EGameStatus.LOSE)
        }
    }, [incorrectGuesses])

    // render
    function renderStatus() {
        if (props.gameStatus === EGameStatus.START)
            return <p className="missing-text">LOADING PUZZLE...</p>
        if (props.gameStatus === EGameStatus.ACTIVE)
            return <p>You have { props.maxIncorrectGuesses - incorrectGuesses.length } incorrect guesses remaining</p>
        if (props.gameStatus === EGameStatus.WIN)
            return <p className="correct-text">YOU SOLVED THE PUZZLE! NICE JOB!!</p>
        if (props.gameStatus === EGameStatus.LOSE)
            return <p className="wrong-text">GAME OVER. YOU LOSE.</p>
        
        return ""
    }

    return (
        <div id="output-section" className="center">
            <div>
                <p>Your incorrect guesses: [&nbsp;<span className="wrong-text">{ incorrectGuesses.join(" ") }</span>&nbsp;]</p>
                { renderStatus() }
            </div>
        </div>
    )
}

export default OutputGuesses;