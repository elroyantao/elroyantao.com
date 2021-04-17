import React from 'react'
import PropTypes from 'prop-types'

import styles from './PageTitle.module.css'

const SubTitle = ({ title }) => {
  return (
    <div className={styles.subtitle}>
      <h3>{title}</h3>
    </div>
  )
}

SubTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default SubTitle
