import React from 'react';
import cls from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
  return (
    <div className={cls.dialog}>
      <NavLink to={'dialog/' + props.id}>
        {props.name}
      </NavLink>
    </div>
  )

}

export default Dialog