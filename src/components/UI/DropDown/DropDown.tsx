import { useState } from 'react'
import { Menu } from '@headlessui/react'
import styles from './DropDown.module.sass'
import dropButton from '../../../img/dropdown.svg'
import dropActive from '../../../img/dropdowrn-active.svg'

const DropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={styles.menu_wrapper}>
      <Menu as="div" className={styles.menu}>
        <div>
          <Menu.Button
            onClick={() => setIsOpen((prev) => !prev)}
            className={styles.menu_button}
          >
            <img src={isOpen ? dropActive : dropButton} alt="dropButton" />
          </Menu.Button>
        </div>
        <Menu.Items className={styles.menu_items}>
          <div className={styles.menu_items_wrapper}>
            <Menu.Item className={styles.menu_items_item} as="div">
              Изменить
            </Menu.Item>
            <Menu.Item className={styles.menu_items_item} as="div">
              Удалить
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default DropDown
