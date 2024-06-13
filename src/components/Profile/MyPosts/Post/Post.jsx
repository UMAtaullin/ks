import React from 'react';
import cls from './Post.module.css'

const Post = (props) => {

  return (
    <div className={cls.posts}>
      <div className={cls.ava}>
        <img
          src='https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'
          alt='Ava'
        />
      </div>
      <div className={cls.message}>
        {props.message}
      </div>
      <div className={cls.like}>
        <span>likes</span>
        {props.like}
      </div>
    </div>
  )
}

export default Post