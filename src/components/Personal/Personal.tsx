import styles from './Personal.module.sass'
import DropDown from '../UI/DropDown/DropDown'
import avatar from '../../img/avatar.svg'

const Personal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_side}>
        <div className={styles.img}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.info}>
          <p>Рожков Денис Петрович</p>
          <span>30 лет, муж</span>
        </div>
      </div>
      <div className={styles.right_side}>
        <DropDown />
      </div>
    </div>
  )
}

export default Personal
