import React from 'react';
import cls from './Message.module.css'

const Message = (props) => {
  return (
    <div className={cls.message}>
      <div>{props.message}</div>
    </div>
  )
}

export default Message