import React from 'react'
import Copyright from '../Copyright'
import Menu from '../Menu/Menu'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks/SocialLinks'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Profile />
      <Menu />
      <SocialLinks />
      <Copyright />
    </header>
  )
}

export default Header
