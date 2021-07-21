import React from "react"

function DisplayGuessedLetters(props) {
  
  let guessedString = props.guessedLetters.join(' ')

  return(
    <div>
      {guessedString}
    </div>
  )
}

export default DisplayGuessedLetters; 