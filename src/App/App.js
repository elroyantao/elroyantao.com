import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ContentArea from '../components/ContentArea'
import Header from '../components/Header'

import styles from './App.module.css'

function App() {
  return (
    <Router>
      <div className={styles.content}>
        <Header />
        <ContentArea />
      </div>
    </Router>
  )
}

export default App
