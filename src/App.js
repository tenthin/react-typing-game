import React, {useState, useRef,useEffect} from 'react'
import './App.css';


const getCloud = () => `codeamn hello eleonmusk react playground yo by amazon apple macbook
windows bitcoin dogecoin mars tesla space editors mars earth heater water air javascripts
react boat blanket`.split(' ')
// .sort(() => Math.random() > 0.5 ? 1 : -1)

function Word(props) {

  const { text, active, correct} = props

  const rerender = useRef(0)
  
  useEffect(() => {
    rerender.current += 1
    })


    




  if (correct === true) {
    return <span className='correct'>{text}{rerender.current} </span>
  }

  if (correct === false) {
    return <span className='incorrect'>{text}{rerender.current} </span>
  }

  if (active) {
    return <span className='active'>{text}{rerender.current} </span>
  }

  return <span>{text}{rerender.current} </span>
}


Word = React.memo(Word)

function Timer(props) {

  const [speed, setSpeed] = useState(0)

  useEffect(() => {
    if(props.startCounting) {
      setInterval(() => {

      },1000)
    }
    },[props.startCounting])


  return <p>Spped: {speed}</p>
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
      <Timer 
        startCounting={false}
      />
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
