import React from 'react'
import './SavedQuotes.css'

const SavedQuotes = ({ quotes, onClose }) => {
  return (
    <div className='saved-container'>
      <div className='saved-header'>
        <h2>❤️ Saved Quotes ({quotes.length})</h2>
        <button className='close-btn' onClick={onClose}>✕ Back</button>
      </div>

      {quotes.length === 0 ? (
        <p className='no-quotes'>No saved quotes yet! Go save some 😊</p>
      ) : (
        <div className='saved-list'>
          {quotes.map((quote, index) => (
            <div className='saved-card' key={index}>
              <h3>"{quote.text}"</h3>
              <p>~{quote.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SavedQuotes