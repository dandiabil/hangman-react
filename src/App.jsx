import { useEffect, useState } from "react";
import Placeholder from "./components/placeholder.jsx";
import splitLetter from "./lib/split-letter";
import "./App.css";
import checkInput from "./lib/check-input.js";

function App() {
  const word = "TESTING";
  const [input, setInput] = useState("");
  const [arrayOfLetter, setArrayOfLetter] = useState([]);

  const checkHandler = (e) => {
    e.preventDefault();

    if (!input) return;

    setArrayOfLetter((prev) => checkInput(input, prev));

    setInput("");
  };

  useEffect(() => {
    if (!word) return;

    setArrayOfLetter(splitLetter(word));
  }, [word]);

  return (
    <div className="App">
      <header>
        <h1>HANGMAN</h1>
      </header>
      <Placeholder arrayOfLetter={arrayOfLetter} />
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={1}
        />
        <button onClick={checkHandler}>Check</button>
      </form>
    </div>
  );
}

export default App;
