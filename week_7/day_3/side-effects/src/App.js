import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [doubleNum, setDoubleNum] = useState(0)

  useEffect(() => {
    console.log("use effect triggered");
    setDoubleNum(number * 2)
  }, [number])

  const handleInc = () => {
    setNumber(number + 1)
    // setDoubleNum(number * 2)
  }

  const handleDec = () => {
    setNumber(number - 1)
    // setDoubleNum(number * 2)
  }


  return (
    <>
    <button value={number} onClick={handleInc}>+</button>
    <button value={number} onClick={handleDec}>-</button>
    <h2>Number is {number}</h2>
    <h2>DoubleNum is {doubleNum}</h2>
    </>


  );
}

export default App;
