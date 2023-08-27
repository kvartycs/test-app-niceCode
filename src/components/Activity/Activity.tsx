import styles from './Activity.module.sass'
import calendar from '../../img/calendar.svg'
import camera from '../../img/video-camera.svg'
import clock from '../../img/clock.svg'
import preview from '../../img/activity.svg'

const Activity = () => {
  return (
    <div className={styles.wrapper}>
      <div className="">
        <img src={preview} alt="preview" />
      </div>
      <div className={styles.text}>
        <p>Тяга резинки в шаге со сгибанием локтя под 90 градусов </p>
        <div className={styles.info}>
          <div className={styles.info_item}>
            <img src={camera} alt="camera" />
            <p>Вебинар</p>
          </div>
          <div className={styles.info_item}>
            <img src={calendar} alt="calendar" />
            <p>9 марта 2021</p>
          </div>
          <div className={styles.info_item}>
            <img src={clock} alt="clock" />
            <p>17:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
