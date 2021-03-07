import React, { useState } from 'react'
import classnames from 'classnames'

import Copyright from '../Copyright'
import Menu from '../Menu/Menu'
import Toggle from './Toggle'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks/SocialLinks'

import styles from './Header.module.css'

const Header = () => {
  const [headerOpen, toggleHeader] = useState(false)

  const headerClass = classnames(styles.header, {
    [styles['mobile-menu-hide']]: !headerOpen
  })

  return (
    <>
      <Toggle active={headerOpen} onToggle={toggleHeader} />
      <header className={headerClass}>
        <Profile />
        <Menu />
        <SocialLinks />
        <Copyright />
      </header>
    </>
  )
}

export default Header
