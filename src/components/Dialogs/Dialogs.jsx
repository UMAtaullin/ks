import React from 'react'
import cls from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'


const Dialogs = (props) => {

  let dialogElement = props.names.map((el) => (
    <Dialog name={el.name} id={el.id} />
  ))

  let messageElement = props.messages.map((el) => (
    <Message message={el.message} />
  ))
  
  const onNewMessage = (event) => {
    let text = event.target.value
    // props.dispatch(onNewMessageCreator(text))
    props.changeMessage(text)
  }

  const onSendMessage = () => {
    // props.dispatch(onSendMessageCreator())
    props.sendMessage()
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
