function WordDisplay({ puzzleWord, guessedLetters }) {
    const displayCharacters = () => {
        let characters = puzzleWord.split('');

        // Determining whether a char should be displayed normally, or as '_'
        let modifiedChars = characters.map(char => {
            return guessedLetters.includes(char) ? char + ' ' : '_ '
        })

        return modifiedChars;
    }

    return (
        <div>
            <p>{displayCharacters()}</p>
        </div>
    )
}

export default WordDisplay;