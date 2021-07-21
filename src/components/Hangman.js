import PuzzleWorldArray from "../data/words.json"
import { useEffect, useRef, useState } from "react"
import InputGuess from "./InputGuess"
import OutputGuesses from "./OutputGuesses"
import Puzzle from "./Puzzle"
import EGameStatus from "./types/gameStatus"

// use this function to use our static word data (instead of using an API)
function getNewWord() {
    let index = Math.floor(Math.random() * PuzzleWorldArray.length)
    return PuzzleWorldArray[index].toUpperCase()
}

function Hangman(props) {    
    // states
    const [puzzleWord, setPuzzleWord] = useState("")
    const [guessedLetters, setGuessedLetters] = useState([])
    const [gameStatus, setGameStatus] = useState(EGameStatus.START)

    let newWord = useRef("")
    const { maxIncorrectGuesses = 6 } = props; // example of how to specify a default value

    // updates
    useEffect(() => {
        if (gameStatus === EGameStatus.START) {
            fetch("https://random-word-api.herokuapp.com/word") // API call
                .then(data => data.json())
                .then(wordArray => {
                    newWord.current = wordArray[0].toUpperCase()
                    setGameStatus(EGameStatus.ACTIVE)
                });
        }
        else if (gameStatus === EGameStatus.ACTIVE) {
            setPuzzleWord(newWord.current)
            setGuessedLetters([])
        }

    }, [gameStatus])

    // handlers
    function submitGuess(letter) {
        if (guessedLetters.includes(letter)) {
            alert(`You already guessed the letter: ${letter}. Please guess another letter!`)
            return
        }

        setGuessedLetters([...guessedLetters, letter])
        //setGuessedLetters(guessedLetters.concat(letter)) // another way to update an array correctly
    }

    function alterGameStatus(newGameStatus) {
        if (Object.values(EGameStatus).indexOf(newGameStatus) === -1) {
            console.error("Invalid game status!")
            return
        }
        setGameStatus(newGameStatus)
    }

    // render
    return (
        <div>
            <InputGuess 
                submitGuessHandler={submitGuess}
                gameStatus={gameStatus}/>
            <Puzzle 
                puzzleWord={puzzleWord} 
                guessedLetters={guessedLetters}
                gameStatus={gameStatus}
                alterGameStatusHandler={alterGameStatus} />
            <OutputGuesses 
                puzzleWord={puzzleWord}
                guessedLetters={guessedLetters}
                gameStatus={gameStatus}
                alterGameStatusHandler={alterGameStatus}
                maxIncorrectGuesses={maxIncorrectGuesses}/>
        </div>
    )
}

export default Hangman;