import { NEW_MESSAGE, SEND_MESSAGE } from './constants'

const messagesReducer = (state, action) => {
  if (action.type === NEW_MESSAGE) {
    state.newMessage = action.inputText
  } else if (action.type === SEND_MESSAGE) {
    let newMessage = { id: 5, message: state.newMessage }
    state.messageData.push(newMessage)
    state.newMessage = ''
  }
  return state
}

export const onNewMessageCreator = (text) =>
  ({ type: NEW_MESSAGE, inputText: text })

export const onSendMessageCreator = () => ({ type: SEND_MESSAGE })

export default messagesReducer