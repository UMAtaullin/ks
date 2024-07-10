import React from 'react'
import { newMessageAction, sendMessageAction } from '../../redux/messages-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

  let state = props.store.getState()
 
  const changeMessage = (text) => {
    props.store.dispatch(newMessageAction(text))
  }

  const sendMessage = () => {
    props.store.dispatch(sendMessageAction())
  }

  return (
    <Dialogs
      changeMessage={changeMessage}
      sendMessage={sendMessage}
      newMessage={state.messagesPage.newMessage}
      names={state.messagesPage.dialogData}
      messages={state.messagesPage.messageData}
    />
  )
}

export default DialogsContainer
