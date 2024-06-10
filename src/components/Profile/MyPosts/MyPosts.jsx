import React from 'react';
import Post from './Post/Post'
import cls from './MyPosts.module.css'

const MyPosts = () => {
  let postData = [
    { id: 1, message: 'Hi, it is my first post', like: 5 },
    { id: 2, message: 'That is what is new in my life today', like: 14 },
  ]
  return (
    <div className={cls.new}>
      New post
      <div className={cls.area}>
        <textarea></textarea>
        <button>Add post</button>
        <button>Delete</button>
      </div>
      <div className={cls.my}>My posts</div>
      <div className='posts'>
        <Post message={postData[0].message} like={postData[0].like} />
        <Post message={postData[1].message} like={postData[0].like} />
      </div>
    </div>
  )
}

export default MyPosts