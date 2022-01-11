import React, {useState, useRef} from 'react'
import './App.css';


const getCloud = () => `codeamn hello eleonmusk react playground yo by amazon apple macbook
windows bitcoin dogecoin mars tesla space editors mars earth heater water air javascripts
react boat blanket`.split(' ')
// .sort(() => Math.random() > 0.5 ? 1 : -1)

function Word(props) {

  const { text, active, correct} = props

  if (correct === true) {
    return <span className='correct'>{text} </span>
  }

  if (correct === false) {
    return <span className='incorrect'>{text} </span>
  }

  if (active) {
    return <span className='active'>{text} </span>
  }

  return <span>{text} </span>
}


function App() {

  const [userInput, setUserInput] = useState('')
  const cloud = useRef(getCloud())

  const [activeWordIndex, setactiveWordIndex] = useState(0)
  const[correctWordArray,setCorrectWordArray] = useState([])


  function processInput(value) {

    // TODO: add validation for the quiz end
    // Word count and timer
    if(value.endsWith(' ')) {
      // that means the user has finised this word
      setactiveWordIndex(index => index + 1)
      setUserInput(' ')

          // correct word
          setCorrectWordArray(data => {
            const word = value.trim()
            const newResult = [...data]
            newResult[activeWordIndex] = true
            newResult[activeWordIndex] = word=== cloud.current[activeWordIndex]
            return newResult;
          })



    }else{
      setUserInput(value)
    }
  }
  return (

    <div>
      <h1>Typing Test</h1>
      <p>{cloud.current.map((word, index) => {

        return <Word 
                text={word} 
                active = {index ===activeWordIndex}
                correct = {correctWordArray[index]}
                />
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
