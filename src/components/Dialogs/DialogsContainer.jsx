import React from 'react'
import { newMessageAction, sendMessageAction } from '../../redux/messages-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../storeContext'

const DialogsContainer = (props) => {

  // let state = props.store.getState()
 
  // const changeMessage = (text) => {
  //   props.store.dispatch(newMessageAction(text))
  // }

  // const sendMessage = () => {
  //   props.store.dispatch(sendMessageAction())
  // }

  return (
    <StoreContext.Consumer> 
      {
      (store) => {
        let state = store.getState()

        const changeMessage = (text) => {
          store.dispatch(newMessageAction(text))
        }

        const sendMessage = () => {
          store.dispatch(sendMessageAction())
        }
        return <Dialogs
          changeMessage={changeMessage}
          sendMessage={sendMessage}
          newMessage={state.messagesPage.newMessage}
          names={state.messagesPage.dialogData}
          messages={state.messagesPage.messageData}
        />
      }
    }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
