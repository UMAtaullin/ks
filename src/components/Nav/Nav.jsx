import React from "react";
import cls from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className={cls.nav}>
      <div className={cls.item}>
        <NavLink to='profile'>Profile</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to='dialogs'>Dialogs</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to='news'>News</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to='music'>Music</NavLink>
      </div>
      <div className={cls.lastItem}>
        <NavLink to='settings'>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Nav