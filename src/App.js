import logo from './logo.svg';
import './App.css';

function App() {
  constructor(props){
    super(props);
    allWords = [
      "marriageproof",
      "minionette",
      "unlichened",
      "electrocardiographic",
      "hippophagy",
      "polyphore",
      "debellate",
      "zyga",
      "antedonin",
      "hirudinean",
      "foremastman",
      "metapolitics",
      "bianisidine",
      "gros",
      "superindifferent",
      "collar",
      "maculose",
      "unphysically",
      "narrowish",
      "Bartonia",
      "inadherent",
      "arbitrary",
      "forefeelingly",
      "palame",
      "vina",
      "northwestward"
      ]
    this.state = {
      chosentWord: allWords[Math.floor(Math.random() * allWords.length)],
      matchedLetters: [],
      notMatchingLetters: [],
    }
  };
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
