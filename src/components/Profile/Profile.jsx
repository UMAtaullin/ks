import React from 'react'
import cls from './Profile.module.css'
import MyInfo from './MyInfo/MyInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {

  return (
    <div className={cls.content}>
      <MyInfo />
      <MyPostsContainer 
        // store={props.store} 
      />
    </div>
  )
}

export default Profile