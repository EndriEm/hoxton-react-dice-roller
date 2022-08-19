import { useState } from 'react'

import './App.css'

function App() {
  const [number, setNumber] = useState();

  const numbers = [1, 2, 3, 4, 5, 6];
  const roll = numbers[Math.floor(Math.random() * 6)];

  return (
    <div className="App">
      <h1>{roll}</h1>
      <button onClick={() => {roll}}>Click</button>
    </div>
  );
}

export default App
