import React from "react"

const DisplayPuzzle = (props) => {
  const { puzzle, guessedLetters } = props

  const DisplayPuzzle = () => {
    const puzzleArr = puzzle.split('')
    
    return puzzleArr.map((letter,index) => {
      if (letter in guessedLetters){
        return (<span className='strong' key={index} value={letter}> {letter} </span>)
      } else {
        return (<span key={index} value=''>_</span>)
      }
    })
  }
  console.log('Guessed Letters:', guessedLetters)
  return(
    <div>
      <br />
      {puzzle}
      <br/>
      <DisplayPuzzle />
    </div>
  )
}


export default DisplayPuzzle; 