import React from 'react';
import Post from './Post/Post'
import cls from './MyPosts.module.css'

const MyPosts = (props) => {

  let postElement = props.posts.map((el) => (
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