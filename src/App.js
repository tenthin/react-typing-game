import React, {useState, useRef,useEffect} from 'react'
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


Word = React.memo(Word)

function Timer(props) {
  const {correctWords, startCounting} = props
  const [timeElapsed, setTimeElapsed] = useState(0)

  useEffect(() => {
    let id
    if(startCounting) {
      id = setInterval(() => {

        setTimeElapsed(oldTime => oldTime + 1)
      },1000)
    }

    return() => {
      clearInterval(id)
    }
    },[startCounting])
  
  const minutes = timeElapsed/60 

  return <div>
      <p><b>Time:</b> {timeElapsed}</p>
      <p><b>Speed:</b> {((correctWords/minutes) || 0).toFixed(2)}WPM</p>
    </div>
}
function App() {

  const [userInput, setUserInput] = useState('')
  const cloud = useRef(getCloud())

  const [startCounting, setStartCounting] = useState(false)

  const [activeWordIndex, setactiveWordIndex] = useState(0)
  const[correctWordArray,setCorrectWordArray] = useState([])

  function processInput(value) {

    if(!startCounting) {
      setStartCounting(true)
    }
    
    if(value.endsWith(' ')) {
      // that means the user has finised this word

      if(activeWordIndex === cloud.current.length-1) {
        // that means we are about to over flow
        setStartCounting(false)
        setUserInput('Completed')
      }else{
        setUserInput('')
      }


      setactiveWordIndex(index => index + 1)


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
        startCounting={startCounting}
        correctWords={correctWordArray.filter(Boolean).length}
      />
      <p>{cloud.current.map((word, index) => {

        return <Word 
                text={word} 
                active = {index ===activeWordIndex}
                correct = {correctWordArray[index]}
                />
      })}</p>
  
      <input
      placeholder='Start typing...'
      type="text" 
      value={userInput} 
      onChange={(e) => processInput(e.target.value)}
      />
    


    </div>
  );
}

export default App;
