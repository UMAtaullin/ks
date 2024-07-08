import React from 'react'
import cls from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { onNewMessageCreator, onSendMessageCreator } from '../../redux/messages-reducer'

const Dialogs = (props) => {

  let dialogElement = props.names.map((el) => (
    <Dialog name={el.name} id={el.id} />
  ))

  let messageElement = props.messages.map((el) => (
    <Message message={el.message} />
  ))
  
  const onNewMessage = (event) => {
    let text = event.target.value
    let action = onNewMessageCreator(text)
    props.dispatch(action)
  }

  const onSendMessage = () => {
    let action = onSendMessageCreator()
    props.dispatch(action)
  }

  return (
    <div className={cls.dialogs_page}>
      <div className={cls.dialogs}>{dialogElement}</div>
      <div className={cls.messages}>
        <div>{messageElement}</div>
        <div>
          <textarea 
          onChange={onNewMessage}
          value={props.newMessage}/>
        </div>
        <div>
          <button onClick={onSendMessage}>
            Send message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
