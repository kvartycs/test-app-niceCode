import { useState } from 'react'
import styles from './Filter.module.sass'
import search from '../../img/search.svg'
import searchActive from '../../img/search-active.svg'
import plus from '../../img/plus.svg'
import loupe from '../../img/loupe.svg'
import clear from '../../img/clear.svg'
import clearActive from '../../img/clear-active.svg'
import plusActive from '../../img/plus-active.svg'
import filter from '../../img/filter.svg'
import filterActive from '../../img/filter-active.svg'

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchHover, setIsSearchHover] = useState(false)
  const [isSortHover, setIsSortHover] = useState(false)
  const [isPlusHover, setIsPlusHover] = useState(false)
  const [isClearHover, setIsClearHover] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className={styles.container}>
      <div className={styles.left_side}>
        {isOpen ? (
          <div className={styles.input_wrapper}>
            <div className={styles.input_container}>
              <div className="">
                <img src={loupe} alt="search" />
              </div>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="">
              <button
                onMouseOver={() => setIsClearHover(true)}
                onMouseOut={() => setIsClearHover(false)}
                onClick={() => {
                  setValue('')
                  setIsOpen(false)
                  setIsSearchHover(false)
                  setIsClearHover(false)
                }}
              >
                <img src={isClearHover ? clearActive : clear} alt="clear" />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            onMouseOver={() => setIsSearchHover(true)}
            onMouseOut={() => setIsSearchHover(false)}
          >
            <img src={isSearchHover ? searchActive : search} alt="search" />
          </button>
        )}
      </div>
      <div className="right_side">
        <button
          onMouseOver={() => setIsSortHover(true)}
          onMouseOut={() => setIsSortHover(false)}
        >
          <img src={isSortHover ? filterActive : filter} alt="sort" />
        </button>
        <button
          onMouseOver={() => setIsPlusHover(true)}
          onMouseOut={() => setIsPlusHover(false)}
          className={styles.plus}
        >
          <img src={isPlusHover ? plusActive : plus} alt="add" />
        </button>
      </div>
    </div>
  )
}

export default Filter
