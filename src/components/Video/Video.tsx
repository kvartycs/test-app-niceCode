import styles from './Video.module.sass'
import preview from '../../img/video.svg'

const Video = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_side}>
        <div className="img">
          <img src={preview} alt="preview" />
        </div>
        <div className={styles.text}>
          <p>Разминка для локтевого сустава</p>
          <span>Астахова Е.В.</span>
        </div>
      </div>
      <div className={styles.right_side}>
        <span>15.01.2019 - 22.01.2019</span>
      </div>
    </div>
  )
}

export default Video
