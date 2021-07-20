import React from "react"

const DisplayPuzzle = (props) => {

  const { puzzle, guessedLetters } = props
  
  const puzzleArr = puzzle.split('')
  
  const DisplayPuzzle = () => {
    return puzzleArr.map((letter,index) => {

      if (letter in guessedLetters){
        return (<span className='strong' key={index} value={letter}> {letter} </span>)
      } else {
        return (<span key={index} value=''>_</span>)
      }
      
    })
  }
  console.log(guessedLetters)
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