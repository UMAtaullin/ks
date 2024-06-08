import React from 'react';
import Post from './Post/Post'
import cls from './MyPosts.module.css'

const MyPosts = () => {
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
        <Post message='Hi, it is my first post' like='5' />
        <Post message='That is what is new in my life today' like='14' />
      </div>
    </div>
  )
}

export default MyPosts