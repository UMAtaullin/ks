import { ADD_POST, CHANGE_POST, NEW_MESSAGE, SEND_MESSAGE } from './constants'

const store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi, it is my first post', like: 5 },
        { id: 2, message: 'That is what is new in my life today', like: 14 },
        { id: 3, message: 'Thanks a lot', like: 117 },
      ],
      newText: ''
    },
    messagesPage: {
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
    },
    sidebar: {}
  },
  _rerenderTree() {console.log('State was change')},
  subscribe(observer) {this._rerenderTree = observer},
  getState() {return this._state},

  dispatch(action) {
    debugger
    if (action.type === CHANGE_POST) {
      this._state.profilePage.newText = action.inputText
      this._rerenderTree()
    } else if (action.type === ADD_POST) {
      let newPost = { id: 4, message: this._state.profilePage.newText, like: 0 }
      this._state.profilePage.postData.push(newPost)
      this._state.profilePage.newText = ''
      this._rerenderTree()
    } else if (action.type === NEW_MESSAGE) {
      this._state.messagesPage.newMessage = action.inputText
      this._rerenderTree()
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {id: 5, message: this._state.messagesPage.newMessage}
      this._state.messagesPage.messageData.push(newMessage)
      this._state.messagesPage.newMessage = ''
      this._rerenderTree()
    }
  }
}

export const onPostChangeActionCreator = (text) => 
  ({type: CHANGE_POST, inputText: text})

export const addPostActionCreator = () => ({type: ADD_POST})

export const onNewMessageCreator = (text) => 
  ({type: NEW_MESSAGE, inputText: text})

export const onSendMessageCreator = () => ({type: SEND_MESSAGE})

export default store

