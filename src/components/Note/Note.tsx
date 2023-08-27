import styles from './Note.module.sass'
import DropDown from '../UI/DropDown/DropDown'

const Note = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        <span>20.12.2019</span>
        Физические упражнения способствуют активизации мышечных сокращений,
        кровотока в тканях, снимают отечность, повышают энергетические
        возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение
        различных посттравматических дефектов в самих мышцах, костной ткани,
        связках и сухожилиях.
      </p>
      <DropDown />
    </div>
  )
}

export default Note
