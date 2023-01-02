import { useEffect, useState } from "react";
import Placeholder from "./components/placeholder.jsx";
import splitLetter from "./lib/split-letter";
import "./App.css";
import checkInput from "./lib/check-input.js";

function App() {
  const word = "TESTING";
  const [input, setInput] = useState("");
  const [arrayOfLetter, setArrayOfLetter] = useState([]);
  const [wrongLetter, setWrongLetter] = useState([]);

  const checkHandler = (e) => {
    e.preventDefault();

    if (!input) return;

    setArrayOfLetter((prev) => checkInput(input, prev));

    const inputted = arrayOfLetter.findIndex(
      (item) => item.data == input.toUpperCase()
    );

    if (inputted == -1) {
      setWrongLetter((prev) => [...prev, input]);
    }

    setInput("");
  };

  useEffect(() => {
    if (!word) return;

    setArrayOfLetter(splitLetter(word.toUpperCase()));
  }, [word]);

  return (
    <div className="App">
      <header>
        <h1>HANGMAN</h1>
      </header>
      {/* TO ADD: HINT FEATURES */}
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
      <div>
        <p>
          Wrong Letters:{" "}
          {wrongLetter.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default App;
