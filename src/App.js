import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import React, { useState } from 'react'

function App() {
  const [previousValue, setPreviousValue] = useState("0");
  const [currentOperator, setcurrentOperator] = useState("");
  const [value, setValue] = useState("0");

  const addDigit = (digit) => {
    let tempValue = ""
    if(value === "0" && digit === "0") return;
    if(value!=="0") tempValue = value;
    setValue(tempValue + digit);
  };

  const calculateResult = () => {
    if(value === "0") return;
    switch(currentOperator) {
        case "/":
          setValue((parseFloat(previousValue) / parseFloat(value)).toString())
          break;
        case "+":
          setValue((parseFloat(previousValue) + parseFloat(value)).toString())
          break;
        case "x":
          setValue((parseFloat(previousValue) * parseFloat(value)).toString())
          break;
        case "-":
          setValue((parseFloat(previousValue) - parseFloat(value)).toString())
          break;
        default:
          break;
      }
      setcurrentOperator("");
  };

  const addOperator = (operator) =>{
    if(value === "0" && previousValue==="") return;
    if(operator === "." && value.includes(".")) return;

    if(operator === "."){
      setValue(value + operator);
      return;
    }
    
    //operator is not .
    if(currentOperator === "/" || currentOperator === "+" || currentOperator === "-" || currentOperator === "*"){
      switch(operator) {
        case "/": {
          setPreviousValue((parseFloat(previousValue) / parseFloat(value)).toString())
          setValue("0");
          break;
        }
        case "+": {
          setPreviousValue((parseFloat(previousValue) + parseFloat(value)).toString())
          setValue("0");
          break;
        }
        case "x": {
          setPreviousValue((parseFloat(previousValue) * parseFloat(value)).toString())
          setValue("0");
          break;
        }
        case "-": {
          setPreviousValue((parseFloat(previousValue) - parseFloat(value)).toString())
          setValue("0");
          break;
        }
        default:
          break;
      }
      setcurrentOperator(operator);
      return;
    }

    setcurrentOperator(operator)
    setPreviousValue(value);
    setValue("0");
  }
  
  const clearInput = () =>{
    setPreviousValue("0");
    setcurrentOperator("");
    setValue("0");
  }

  return (
    <>
      <h1>Calculator</h1>
     
      <div className='container'>
        <Display value={value}/>

        <Button handleClick={()=>{addDigit("7")}}buttonValue={7}/>
        <Button handleClick={()=>{addDigit("8")}}buttonValue={8}/>
        <Button handleClick={()=>{addDigit("9")}}buttonValue={9}/>
        <Button handleClick={()=>{addOperator("/")}}buttonValue={'/'}/>

        <Button handleClick={()=>{addDigit("4")}}buttonValue={4}/>
        <Button handleClick={()=>{addDigit("5")}}buttonValue={5}/>
        <Button handleClick={()=>{addDigit("6")}}buttonValue={6}/>
        <Button handleClick={()=>{addOperator("x")}}buttonValue={'x'}/>

        <Button handleClick={()=>{addDigit("1")}}buttonValue={1}/>
        <Button handleClick={()=>{addDigit("2")}}buttonValue={2}/>
        <Button handleClick={()=>{addDigit("3")}}buttonValue={3}/>
        <Button handleClick={()=>{addOperator("+")}}buttonValue={'+'}/>

        <Button handleClick={()=>{addOperator(".")}}buttonValue={'.'}/>
        <Button handleClick={()=>{addDigit("0")}}buttonValue={0}/>
        <Button handleClick={()=>{calculateResult()}}buttonValue={'='}/>
        <Button handleClick={()=>{addOperator("-")}}buttonValue={'-'}/>

        <Button handleClick={()=>{clearInput()}}buttonValue={'clear'}/>
      </div>
    </>
  );
}

export default App;



