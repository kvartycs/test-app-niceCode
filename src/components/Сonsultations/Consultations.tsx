import React from 'react'
import consultation from '../../img/consultation.svg'
import styles from './Consultations.module.sass'

const Consultations = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={consultation} alt="consultation" />
      </div>
      <div className={styles.text}>
        <p>Online консультация</p>
        <span>15.01.2019, 12:30-13:00</span>
      </div>
    </div>
  )
}

export default Consultations
