import React from 'react'
import Routes from '../../routes'

import styles from './ContentArea.module.css'

const ContentArea = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Routes />
      </div>
    </div>
  )
}

export default ContentArea
