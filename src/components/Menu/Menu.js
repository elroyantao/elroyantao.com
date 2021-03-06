import React from 'react'
import { IoHomeOutline, IoSchoolOutline } from 'react-icons/io5'

import MenuItem from './MenuItem'

import styles from './Menu.module.css'

const menus = [
  {
    title: 'Home',
    Icon: IoHomeOutline,
    link: '/home'
  },
  // {
  //   link: '/about-me',
  //   icon: 'lnr-user',
  //   title: 'About Me'
  // },
  {
    link: '/resume',
    Icon: IoSchoolOutline,
    title: 'Resume'
  }
  // {
  //   link: '/portfolio',
  //   icon: 'lnr-briefcase',
  //   title: 'Portfolio'
  // },
  // {
  //   link: '/blog',
  //   icon: 'lnr-book',
  //   title: 'Blog'
  // },
  // {
  //   link: '/contact',
  //   icon: 'lnr-envelope',
  //   title: 'Contact'
  // }
]

const Menu = () => {
  return (
    <ul className={styles.menu}>
      {menus.map((item) => (
        <MenuItem key={item.link} {...item} />
      ))}
    </ul>
  )
}

export default Menu
