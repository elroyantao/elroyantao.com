import React from 'react'

import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'

import styles from './SocialLinks.module.css'

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles['list-item']}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/elroyantao/"
            target="_blank"
            rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li className={styles['list-item']}>
          <a
            className={styles.link}
            href="https://github.com/elroyantao"
            target="_blank"
            rel="noreferrer">
            <FaGithubAlt />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
