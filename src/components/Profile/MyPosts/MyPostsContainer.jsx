import React from 'react';
import { addPostAction, postChangeAction } from '../../../redux/profile-reduce'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {

  let state = props.store.getState()

  const postChange = (text) => props.store.dispatch(postChangeAction(text))

  const addPost = () => props.store.dispatch(addPostAction())

  return (
    <MyPosts
      addPost={addPost}
      postChange={postChange}
      postData={state.profilePage.postData}
      newText={state.profilePage.newText}
    />
  )
}

export default MyPostsContainer