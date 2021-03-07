import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Toggle.module.css'

const Toggle = ({ active, onToggle }) => {
  const toggleClass = classnames(styles.toggle, {
    [styles['toggle-open']]: active
  })

  const handleToggle = () => {
    onToggle(!active)
  }

  return (
    <div className={toggleClass} onClick={handleToggle}>
      <span />
      <span />
      <span />
    </div>
  )
}

Toggle.propTypes = {
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default Toggle
