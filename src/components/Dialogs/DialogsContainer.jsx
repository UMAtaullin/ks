import React from 'react'
import { onNewMessageCreator, onSendMessageCreator } from '../../redux/messages-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
 
  const changeMessage = (text) => {
    let action = onNewMessageCreator(text)
    props.dispatch(action)
  }

  const sendMessage = () => {
    let action = onSendMessageCreator()
    props.dispatch(action)
  }

  return (
    <Dialogs
      changeMessage={changeMessage}
      sendMessage={sendMessage}
      newMessage={props.newMessage}
      names={props.names}
      messages={props.messages}
    />
  )
}

export default DialogsContainer
