let rerenderTree = () => console.log('State was change')
export const subscribe = (observer) => rerenderTree = observer

let state = {
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
  },
  sidebar: {}
}

window.state = state

export const changePost = (inputText) => {
  state.profilePage.newText = inputText
  rerenderTree(state)
}

export const addPost = () => {
  let newPost = {id:4, message: state.profilePage.newText, like: 0}
  state.profilePage.postData.push(newPost)
  state.profilePage.newText = ''
  rerenderTree(state)
  }

export default state