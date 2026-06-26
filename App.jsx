import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuoteBox from './components/QuoteBox'
import Buttons from './components/Buttons'
import Header from './components/Header'
import SavedQuotes from './components/SavedQuotes'
import './App.css'

function App() {
  const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" })
  const [loading, setLoading] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [showSaved, setShowSaved] = useState(false)
  const [savedQuotes, setSavedQuotes] = useState(() => {
    const stored = localStorage.getItem('savedQuotes')
    return stored ? JSON.parse(stored) : []
  })

  const fetchQuote = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('https://dummyjson.com/quotes/random')
      setCurrentQuote({ text: data.quote, author: data.author })
    } catch (error) {
      console.error("Failed to fetch quote:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  useEffect(() => {
    localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes))
  }, [savedQuotes])

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, currentQuote])
    alert("Quote Saved!")
  }

  const copyQuote = () => {
    navigator.clipboard.writeText(`"${currentQuote.text}" ~${currentQuote.author}`)
    alert("Copied to clipboard!")
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleSaved = () => {
    setShowSaved(!showSaved)
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        savedCount={savedQuotes.length}
        toggleSaved={toggleSaved}
      />
      {showSaved ? (
        <SavedQuotes quotes={savedQuotes} onClose={toggleSaved} />
      ) : (
        <>
          <QuoteBox quote={currentQuote} loading={loading} />
          <Buttons
            changeQuote={fetchQuote}
            saveQuote={saveQuote}
            copyQuote={copyQuote}
          />
        </>
      )}
    </div>
  )
}

export default App