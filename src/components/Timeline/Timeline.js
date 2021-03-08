import React from 'react'
import PropTypes from 'prop-types'

import styles from './Timeline.module.css'

const Timeline = ({ content }) => {
  const timelineItem = ({ fromDate, toDate, orgName, title, description }) => {
    return (
      <div key={orgName} className={`${styles['timeline-item']} clearfix`}>
        <div className={styles['left-part']}>
          <h5 className={styles['item-period']}>
            {fromDate ? `${fromDate} - ` : ''}
            {toDate}
          </h5>
          <span className={styles['item-company']}>{orgName}</span>
        </div>
        <div className={styles.divider} />
        <div className={styles['right-part']}>
          <h4 className={styles['item-title']}>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.timeline} clearfix`}>
      {content.map(timelineItem)}
    </div>
  )
}

Timeline.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      fromDate: PropTypes.string,
      toDate: PropTypes.string.isRequired,
      orgName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
        .isRequired
    })
  )
}

export default Timeline
