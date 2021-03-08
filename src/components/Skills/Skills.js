import React from 'react'
import PropTypes from 'prop-types'

import styles from './Skills.module.css'

const Skills = ({ content }) => {
  const renderSkill = ({ title, competency }) => {
    return (
      <>
        <div className={`${styles.skill} clearfix`}>
          <h4>{title}</h4>
          <div className={styles['skill-value']}>{competency}%</div>
        </div>
        <div className={styles['skill-container']}>
          <div
            className={styles['skill-percentage']}
            style={{ width: `${competency}%` }}></div>
        </div>
      </>
    )
  }

  return <div className={styles.skills}>{content.map(renderSkill)}</div>
}

Skills.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      competency: PropTypes.number.isRequired
    })
  )
}

export default Skills
