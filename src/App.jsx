import { useState } from 'react'
import './App.css'

function App() {

  const [number, setNumber] = useState([])
  const [result, setResult] = useState(' ')

  const operator = ['%', '/', '-', '+','*']

  /*
    1. The number will be passed in to the "number" state. The function whenClicked will add the number to the state
    2. I have to add event listener to the "number" classes and when c\\ licked I add the value to the number.
  */
  function whenClicked(event) {
    let newNum = event.target.innerHTML

    if (newNum == '%mod') {
      newNum = '%'
    }

    if (newNum == "C" || newNum.includes('<') || number.includes("=") ){
      return number;
      // i just wanted to have some code here.
    }
    else if (newNum != "CE") {
      if (operator.includes(newNum) && operator.includes(number.slice(-1)[0])) {
        setNumber((prev) => [...prev.slice(0, -1), newNum])
      }
      else if  (number == false && operator.includes(newNum)){
          setNumber(["0", newNum])
      }
       else {
          setNumber((prev) => [...prev, newNum] )
      }
      } else if (number.slice(-1) == "=") {
        clear()
      } else {
        setNumber((prev) => [...prev.slice(0, -1)])
      }
   }


  /*
  4. I have to write a function just to execute the calculation
  5. I create a state for the result. This will be
  */
   function calculation() {
      const stringify = eval(number.join(''))
      return setResult(stringify)
      // return setResult(stringify)
   }

   function clear() {
      setNumber([])
      setResult('')
   }

 
  return (
    <>
    <div>
      <h1> Simple Calculator</h1>
    </div>

    <div className='calculator-container'>
      <div className="result-container">
        <h3>{number}</h3>
        <h2>{result}</h2>
      </div>
      <div className="buttons-container"  onClick={whenClicked} >
        <p className="button upper" onClick={clear}>C</p>
        <p className="button upper">CE</p>
        <p className="button upper">%mod</p>
        <p className="button operator">/</p>
        <p className="button" >7</p>
        <p className="button" >8</p>
        <p className="button" >9</p>
        <p className="button operator" >*</p>
        <p className="button" >4</p>
        <p className="button" >5</p>
        <p className="button" >6</p>
        <p className="button operator" >-</p>
        <p className="button" >1</p>
        <p className="button" >2</p>
        <p className="button" >3</p>
        <p className="button operator" >+</p>
        <p className="button zero" >0</p>
        <p className="button" >.</p>
        <div>
        <p className="button operator" onClick={calculation} >=</p>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
