import React, {useState} from 'react'
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('')

  return (

    <div>
      <h1>Typing Test</h1>
      <p>{userInput}</p>

      <input 
      type="text" 
      value={userInput} 
      onChange={(e) => setUserInput(e.target.value)}
      />

    </div>
  );
}

export default App;
