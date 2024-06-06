import React from "react";
import cls from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={cls.nav}>
      <div className={cls.item}>Profile </div>
      <div className={cls.item}>Messenger</div>
      <div className={cls.item}>News</div>
      <div className={cls.item}>Music</div>
      <div className={cls.lastItem}>Settings</div>
    </nav>
  )
}

export default Nav