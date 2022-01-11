import React, {useState, useRef} from 'react'
import './App.css';


const getCloud = () => `codeamn hello eleonmusk react playground yo by amazon apple macbook
windows bitcoin dogecoin mars tesla space editors mars earth heater water air javascripts
react boat blanket`.split(' ')
// .sort(() => Math.random() > 0.5 ? 1 : -1)

function App() {

  const [userInput, setUserInput] = useState('')
  const cloud = useRef(getCloud())

  const [activeWrodIndex, setActiveWrodIndex] = useState(0)

  function processInput(value) {
    if(value.endsWith(' ')) {
      // that means the user has finised this word
      setActiveWrodIndex(index => index + 1)
      setUserInput(' ')
    }else{
      setUserInput(value)
    }
  }
  return (

    <div>
      <h1>Typing Test</h1>
      <p>{cloud.current.map((word, index) => {

        if(index == activeWrodIndex) {
          return <b>{word} </b>
        }

        return <span>{word} </span> 
      })}</p>

      <input 
      type="text" 
      value={userInput} 
      onChange={(e) => processInput(e.target.value)}
      />

    </div>
  );
}

export default App;
