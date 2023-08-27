import { useState } from 'react'
import styles from './UsersList.module.sass'
import User from '../User/User'

const UsersList = () => {
  const [isChange, setIsChange] = useState(false)
  const [isAllChecked, setIsAllChecked] = useState(false)
  console.log(isAllChecked)

  return (
    <div>
      <div className={styles.top}>
        {isChange ? (
          <>
            <div className={styles.top_all}>
              <input
                checked={isAllChecked}
                onChange={() => setIsAllChecked((prev) => !prev)}
                type="checkbox"
                name=""
                id=""
              />
              <p>Все</p>
            </div>

            <div className={styles.top_options}>
              <button>
                <p>Действия</p>
              </button>
              <button onClick={() => setIsChange(false)}>
                <p>Отменить</p>
              </button>
            </div>
          </>
        ) : (
          <>
            <span>213</span>
            <button onClick={() => setIsChange(true)}>
              <p>Выбрать</p>
            </button>
          </>
        )}
      </div>
      <div className={styles.users}>
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="Кравцова Александра"
        />
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="Рожков Денис"
        />
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="Кравцова Александра"
        />
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="Диброва Алевтина"
        />
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="Иванов Дмитрий"
        />
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="nosikov@list.ru"
        />
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="Форс Александр"
        />
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="Ахмедов Артур"
        />
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="Блажевич Игорь"
        />
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="Валиева Руфина"
        />
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="Волошина Виктория"
        />
        <User
          isAllChecked={isAllChecked}
          isChange={isChange}
          name="Волошина Виктория"
        />
      </div>
    </div>
  )
}

export default UsersList
