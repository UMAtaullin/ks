import React from 'react'
import cls from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogData = [
    { id: 1, name: 'Земфира' },
    { id: 2, name: 'Мансур' },
    { id: 3, name: 'Раушания' },
  ]
  let messageData = [
    { id: 1, message: 'Я приеду в понедельник в 4 утра' },
    { id: 2, message: 'Ничего не делала, но очень устала' },
    { id: 3, message: 'Без понятия что сказать' },
  ]
  let dialogElement = dialogData.map((el) => (
    <Dialog name={el.name} id={el.id} />))

  let messageElement = messageData.map((el) => (
    <Message message={el.message} />))

  return (
    <div className={cls.dialogs_page}>
      <div className={cls.dialogs}>{dialogElement}</div>
      <div className={cls.messages}>{messageElement}</div>
    </div>
  )
}

export default Dialogs
