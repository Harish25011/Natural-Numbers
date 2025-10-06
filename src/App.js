import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleGenerate = () => {
    const n = parseInt(num);
    if (isNaN(n) || n <= 0) {
      alert("Please enter a positive number!");
      return;
    }
    const naturalNumbers = Array.from({ length: n }, (_, i) => i + 1);
    setNumbers(naturalNumbers);
  };

  return (
    <div className="app">
      <h1 className="title">Natural Number Generator</h1>

      <div className="input-section">
        <input
          type="number"
          placeholder="Enter a number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate</button>
      </div>

      <div className="number-grid">
        {numbers.map((n) => (
          <div className="number-box" key={n}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

