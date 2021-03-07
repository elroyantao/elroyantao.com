import React from 'react'

import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.name}>Elroy Antão</h2>
        <div className={styles.designation}>Fullstack developer</div>
      </div>
    </div>
  )
}

export default Home
