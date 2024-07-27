import React from 'react';
import { addPostAction, postChangeAction } from '../../../redux/profile-reduce'
import MyPosts from './MyPosts'
import StoreContext from '../../../storeContext'

const MyPostsContainer = (props) => {

  // let state = props.store.getState()

  // const postChange = (text) => props.store.dispatch(postChangeAction(text))

  // const addPost = () => props.store.dispatch(addPostAction())

  return (
    <StoreContext.Consumer> 
      {
      (store) => {
        let state = store.getState()
        const postChange = (text) =>
            store.dispatch(postChangeAction(text))
        const addPost = () => store.dispatch(addPostAction())
        return <MyPosts
          addPost={addPost}
          postChange={postChange}
          postData={state.profilePage.postData}
          newText={state.profilePage.newText}
        />}
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer