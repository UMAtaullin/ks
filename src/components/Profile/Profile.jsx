import React from 'react'
import cls from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import MyInfo from './MyInfo/MyInfo'

const Profile = (props) => {

  return (
    <div className={cls.content}>
      <MyInfo />
      <MyPosts {...props} />
    </div>
  )
}

export default Profile