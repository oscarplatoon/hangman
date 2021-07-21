import React from "react"

const DisplayGuessedLetters = (props) => {

  console.log('Display Guessed Letters is doing stuff.')
  console.log(props.guessedLetters)
  let guessedString = props.guessedLetters.join(' ')

  return(
    <div>
      {guessedString}
    </div>
  )
}

export default DisplayGuessedLetters; 