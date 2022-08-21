import { useState } from "react";

import "./App.css";

function App() {
  const [numbers, setNumbers] = useState(0);

  function roll() {
    setNumbers(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="App">
      <h1>{numbers}</h1>
      <button
        onClick={() => {
          roll();
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
