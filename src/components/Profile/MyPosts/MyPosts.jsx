import React from 'react';
import Post from './Post/Post'
import cls from './MyPosts.module.css'

const MyPosts = () => {
  let postData = [
    { id: 1, message: 'Hi, it is my first post', like: 5 },
    { id: 2, message: 'That is what is new in my life today', like: 14 },
    { id: 3, message: 'Thanks a lot', like: 117 },
  ]
  let postElement = postData.map((el) => (
    <Post message={el.message} like={el.like} />
  ))
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
        {postElement}
      </div>
    </div>
  )
}

export default MyPosts