import { useState } from 'react'
import styles from './MainPanel.module.sass'
import plus from '../../img/plus-panel.svg'
import Note from '../Note/Note'
import Activity from '../Activity/Activity'
import Video from '../Video/Video'
import Consultations from '../Сonsultations/Consultations'

const MainPanel = () => {
  const [active, setActive] = useState({
    note: true,
    video: false,
    activity: false,
    consultations: false,
  })
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.left}>
          <button
            className={active.note ? styles.active : ''}
            onClick={() =>
              setActive({
                note: true,
                activity: false,
                consultations: false,
                video: false,
              })
            }
          >
            <p>Заметки</p>
          </button>
          <button
            className={active.consultations ? styles.active : ''}
            onClick={() =>
              setActive({
                note: false,
                activity: false,
                consultations: true,
                video: false,
              })
            }
          >
            <p>Консультации</p>
          </button>
          <button
            className={active.video ? styles.active : ''}
            onClick={() =>
              setActive({
                note: false,
                activity: false,
                consultations: false,
                video: true,
              })
            }
          >
            <p>Видео</p>
          </button>
          <button
            className={active.activity ? styles.active : ''}
            onClick={() =>
              setActive({
                note: false,
                activity: true,
                consultations: false,
                video: false,
              })
            }
          >
            <p>Мероприятия</p>
          </button>
        </div>
        <div className={styles.right}>
          <p>
            {active.note && 'Новая заметка'}
            {active.activity && 'Рекомендовать'}
            {active.video && 'Рекомендовать'}
            {active.consultations && 'Записать'}
          </p>
          <img src={plus} alt="plus" />
        </div>
      </div>
      <div className={styles.main}>
        {active.note && (
          <>
            <Note />
            <Note />
            <Note />
          </>
        )}
        {active.activity && (
          <>
            <Activity />
            <Activity />
            <Activity />
          </>
        )}
        {active.video && (
          <>
            <Video />
            <Video />
            <Video />
          </>
        )}
        {active.consultations && (
          <>
            <Consultations />
            <Consultations />
            <Consultations />
          </>
        )}
      </div>
    </div>
  )
}

export default MainPanel
