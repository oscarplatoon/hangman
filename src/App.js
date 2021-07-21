import './App.css';
import Hangman from "./components/Hangman"


function App() {
  return (
    <div className="App parent">
        <Hangman maxIncorrectGuesses={7}/>
        <Hangman maxIncorrectGuesses={6}/>
        <Hangman maxIncorrectGuesses={5}/>
    </div>
  );
}

export default App;
