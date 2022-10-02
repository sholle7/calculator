import React from 'react'
import './Button.css'


function Button({handleClick,buttonValue}) {
  return (
   <button onClick={()=>{handleClick()}} className={buttonValue==="clear"?"clear":null}>{buttonValue}</button>
  )
}

export default Button