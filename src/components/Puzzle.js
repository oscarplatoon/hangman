import EGameStatus from "./types/gameStatus"


function Puzzle(props) {
    // render
    function renderPuzzle() {
        if (props.puzzleWord === "" || props.gameStatus === EGameStatus.START)
            return ""
        
        let puzzleElementArray = []
        let solvedLetters = 0
        let index = 0
        for (let letter of props.puzzleWord) {
            index++
            let exists = props.guessedLetters.includes(letter)
            if (exists) {
                solvedLetters++
            }

            let showLetter = exists || props.gameStatus === EGameStatus.LOSE
            let classStyle = showLetter && !exists ? "missing-text" : ""
            let element = <span 
                key={index} 
                className={classStyle}>
                    {index === 0 ? "&nbsp;" : ""} {showLetter ? letter : "_"}&nbsp;    
                </span>
            puzzleElementArray.push(element)
        }

        // check if all letters have been guessed 
        // FIXME: probably a better way to do this!
        if (solvedLetters === props.puzzleWord.length) {
            props.alterGameStatusHandler(EGameStatus.WIN)
        }

        return <span>{puzzleElementArray}</span>
    }

    return (
        <div id="puzzle-section" className="center">
            <div>
                <h1>{ renderPuzzle() }</h1>
                <br />
                <button onClick={() => props.alterGameStatusHandler(EGameStatus.LOSE)}>Give Up</button>
                &nbsp;
                <button onClick={() => props.alterGameStatusHandler(EGameStatus.START)}>New Game</button>
            </div>
        </div>
    )
}

export default Puzzle;