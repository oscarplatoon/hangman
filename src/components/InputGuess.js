import { useState } from "react";
import EGameStatus from "./types/gameStatus";


function InputGuess(props) {
    // states
    const [guess, setGuess] = useState("")

    // handlers
    function updateGuess(event) {
        setGuess(event.target.value.toUpperCase());
    }

    function sendGuess() {
        if (guess >= "A" && guess <= "Z")
            props.submitGuessHandler(guess);
        else
            alert("Invalid guess! Enter a letter A-Z.")
        setGuess("")
    }

    // render
    return (
        <div id="input-section" className="center">
            <label htmlFor="input-guess">Input Guess:&nbsp;</label>
            <input id="input-guess" 
                type="text" 
                placeholder="enter a letter" 
                maxLength="1"
                onChange={updateGuess} 
                value={guess} 
                disabled={props.gameStatus !== EGameStatus.ACTIVE}></input>
            <button onClick={sendGuess} 
                disabled={props.gameStatus !== EGameStatus.ACTIVE}>GUESS</button>
        </div>
    )
}

export default InputGuess;