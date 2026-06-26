import React from 'react'
import './Buttons.css'

const Buttons = ({ saveQuote, changeQuote, copyQuote }) => {
  return (
    <div className='bottom-buttons'>
      <button className='save-btn' onClick={saveQuote}>♡ Save</button>
      <button className='change-btn' onClick={changeQuote}>∞ Change</button>
      <button className='copy-btn' onClick={copyQuote}>⎙ Copy</button>
    </div>
  )
}

export default Buttons