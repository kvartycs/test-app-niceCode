import styles from './User.module.sass'
import avatar from '../../img/avatar.svg'
import { useState, useEffect } from 'react'

interface IUser {
  name: string
  isChange: boolean
  isAllChecked: boolean
}

const User = ({ name, isChange, isAllChecked }: IUser) => {
  const [isChecked, setIsChecked] = useState(isAllChecked)
  console.log(isAllChecked)

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {isChange && (
          <input
            checked={isAllChecked === true ? true : isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            className={styles.checkbox}
            type="checkbox"
          />
        )}
        <div className={styles.img}>
          <img src={avatar} alt="avatar" />
        </div>
        <p>{name} </p>
      </div>
      <div className="right">
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default User
