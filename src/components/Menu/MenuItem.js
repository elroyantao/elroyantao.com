import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import styles from './Menu.module.css'

const MenuItem = ({ title, link, Icon }) => {
  // const active = useRouteMatch('/home')

  const linkClass = classnames(styles['nav-link'], {
    [styles['nav-link--active']]: false
  })

  // const iconClass = classnames(styles['menu-icon'], 'lnr', icon)

  return (
    <li>
      <Link to={link} className={linkClass}>
        <Icon className={styles['menu-icon']} />
        <span className={styles['link-text']}>{title}</span>
      </Link>
    </li>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired
}

export default MenuItem
