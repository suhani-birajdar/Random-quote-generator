import React from 'react'
import './Header.css'

const Header = ({ darkMode, toggleDarkMode, savedCount, toggleSaved }) => {
  return (
    <header className='header'>
      <h1>QuoteHub</h1>
      <div className='header-right'>
        <button className='theme-btn' onClick={toggleDarkMode}>
          {darkMode ? '☀︎ Light Mode' : '⏾ Dark Mode'}
        </button>
        <button className='saved-count' onClick={toggleSaved}>
          ♡ {savedCount}
        </button>
      </div>
    </header>
  )
}

export default Header