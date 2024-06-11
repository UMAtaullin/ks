import React from 'react'
import cls from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialogElement = props.names.map((el) => (
    <Dialog name={el.name} id={el.id} />))

  let messageElement = props.messages.map((el) => (
    <Message message={el.message} />))

  return (
    <div className={cls.dialogs_page}>
      <div className={cls.dialogs}>{dialogElement}</div>
      <div className={cls.messages}>{messageElement}</div>
    </div>
  )
}

export default Dialogs
