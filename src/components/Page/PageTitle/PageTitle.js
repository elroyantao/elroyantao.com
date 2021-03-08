import React from 'react'
import PropTypes from 'prop-types'

import styles from './PageTitle.module.css'

const PageTitle = ({ title }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
    </div>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageTitle
