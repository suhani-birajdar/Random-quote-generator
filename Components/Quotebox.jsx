import React from 'react'
import './QuoteBox.css'

const Quotebox = ({ quote, loading }) => {
  return (
    <section className='main'>
      <div className='quote-box'>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h2>"{quote.text}"</h2>
            <p>~{quote.author}</p>
          </>
        )}
      </div>
    </section>
  )
}

export default Quotebox