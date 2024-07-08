import { ADD_POST, CHANGE_POST } from './constants'

const profileReducer = (state, action) => {
  if (action.type === CHANGE_POST) {
    state.newText = action.inputText
  } else if (action.type === ADD_POST) {
    let newPost = { id: 4, message: state.newText, like: 0 }
    state.postData.push(newPost)
    state.newText = ''
  }
  return state
}

export const onPostChangeActionCreator = (text) =>
  ({ type: CHANGE_POST, inputText: text })

export const addPostActionCreator = () => ({ type: ADD_POST })

export default profileReducer