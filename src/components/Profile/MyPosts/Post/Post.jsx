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
      <div className={cls.message}>Do not repeat yourself</div>
      <div className={cls.like}><span>like</span>
      </div>
    </div>
  )
}

export default Post