import { NEW_MESSAGE, SEND_MESSAGE } from './constants'

let initialState = {
  dialogData: [
    { id: 1, name: 'Земфира' },
    { id: 2, name: 'Мансур' },
    { id: 3, name: 'Раушания' },
  ],
  messageData: [
    { id: 1, message: 'Я приеду в понедельник в 4 утра' },
    { id: 2, message: 'Ничего не делала, но очень устала' },
    { id: 3, message: 'Без понятия что сказать' },
  ],
  newMessage: ''
}

const messagesReducer = (state=initialState, action) => {
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