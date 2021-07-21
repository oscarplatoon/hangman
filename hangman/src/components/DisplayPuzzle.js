import React from "react"

const DisplayPuzzle = (props) => {

  const { puzzle, guessedLetters } = props
  
  const DisplayPuzzle = () => {
    const puzzleArr = puzzle.split('')
    return puzzleArr.map(letter => {
      return guessedLetters.includes(letter) ? letter + ' ' : '_ '
    })
  }

  return(
    <div>
      <br />
      <br/>
      {DisplayPuzzle()}
    </div>
  )
}


export default DisplayPuzzle;