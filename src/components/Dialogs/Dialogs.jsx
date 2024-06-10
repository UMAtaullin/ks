import React from 'react'
import cls from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'Земфира' },
    { id: 2, name: 'Мансур' },
    { id: 3, name: 'Раушания' },
  ]
  let dialogsElement = [
    <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />,
    <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />,
    <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />,
  ]
  let messageData = [
    { id: 1, message: 'Я приеду в понедельник в 4 утра' },
    { id: 2, message: 'Ничего не делала, но очень устала' },
    { id: 3, message: 'Без понятия что сказать' },
  ]
  let messageElement = [
    <Message message={messageData[0].message} />,
    <Message message={messageData[1].message} />,
    <Message message={messageData[2].message} />,
  ]
  return (
    <div className={cls.dialogs_page}>
      <div className={cls.dialogs}>{dialogsElement}</div>
      <div className={cls.messages}>{messageElement}</div>
    </div>
  )
}

export default Dialogs
