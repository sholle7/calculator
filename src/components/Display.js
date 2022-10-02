import React from 'react'
import './Display.css'

function Display({value, previousValue}) {
  return (
    <>
      <div className='display'>
          <p>{value}</p>
          <p className='previous-value'>{previousValue}</p>
      </div>
    </>
  )
}

export default Display