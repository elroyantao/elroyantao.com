import React from 'react'
import ContentArea from '../components/ContentArea'
import Header from '../components/Header'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.content}>
      <Header />
      <ContentArea />
    </div>
  )
}

export default App
