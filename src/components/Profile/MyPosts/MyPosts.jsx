import React from 'react';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Delete</button>
      </div>
      <div>New post</div>
      <div className='posts'>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default MyPosts