import React from 'react'

import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className="header-content">
      <div className={styles.photo}>
        <img
          className={styles.image}
          src="images/elroyantao.jpeg"
          alt="Elroy Antao"
        />
      </div>
      <div>
        <h2 className={styles.name}>Elroy Antão</h2>
        <h4 className={styles.job}>Fullstack Developer</h4>
      </div>
    </div>
  )
}

export default Profile
