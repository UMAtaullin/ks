import { ADD_POST, CHANGE_POST } from './constants'

let initialState = {
  postData: [
    { id: 1, message: 'Hi, it is my first post', like: 5 },
    { id: 2, message: 'That is what is new in my life today', like: 14 },
    { id: 3, message: 'Thanks a lot', like: 117 },
  ],
  newText: ''
}

const profileReducer = (state=initialState, action) => {
  if (action.type === CHANGE_POST) {
    state.newText = action.inputText
  } else if (action.type === ADD_POST) {
    let newPost = { id: 4, message: state.newText, like: 0 }
    state.postData.push(newPost)
    state.newText = ''
  }
  return state
}

export const postChangeAction = (text) =>
  ({ type: CHANGE_POST, inputText: text })

export const addPostAction = () => ({ type: ADD_POST })

export default profileReducer