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
        <Post message='Hi, it is my first post' like='5'/>
        <Post message='That is what is new in my life today' like='14'/>
      </div>
    </div>
  )
}

export default MyPosts