import React from "react"

function DisplayPuzzle(props) {
  const { puzzle, guessedLetters } = props

  const DisplayPuzzle = () => {
    const puzzleArr = puzzle.split('')
    console.log('puzzle array is: ', puzzleArr)
    let puzzleElements = puzzleArr.map((letter,index) => {
      console.log(typeof(letter))
      console.log(guessedLetters.includes(letter))
      if (guessedLetters.includes(letter)){
        console.log('Good Guess')
        return (<span className='strong' key={index} value={letter}> {letter} </span>)
      } else {
        return (<span key={index} value=''>_</span>)
      }
    })
    return (
      <div>
        {
          puzzleElements
        }
      </div>
    )  
  }

  return(
    <div>
      <DisplayPuzzle />
    </div>
  )
}


export default DisplayPuzzle; 