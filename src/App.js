import React, {useState, useRef} from 'react'
import './App.css';


const getCloud = () => `codeamn hello eleonmusk react playground yo by amazon apple macbook
windows bitcoin dogecoin mars tesla space editors mars earth heater water air javascripts
react boat blanket`.split(' ').sort(() => Math.random() > 0.5 ? 1 : -1)

function App() {
  const [userInput, setUserInput] = useState('')
  
  const cloud = useRef(getCloud)

 
  return (

    <div>
      <h1>Typing Test</h1>
      <p>{cloud.current.toString()}</p>

      <input 
      type="text" 
      value={userInput} 
      onChange={(e) => setUserInput(e.target.value)}
      />

    </div>
  );
}

export default App;
