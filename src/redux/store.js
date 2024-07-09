import messagesReducer from './messages-reducer'
import profileReducer from './profile-reduce'

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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._rerenderTree()
  }
}

export default store

