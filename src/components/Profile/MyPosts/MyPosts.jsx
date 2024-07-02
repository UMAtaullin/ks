import React from 'react';
import Post from './Post/Post'
import cls from './MyPosts.module.css'

const MyPosts = (props) => {

  let postElement = props.posts.map((el) => (
    <Post message={el.message} like={el.like} />
  ))
  
  let newPostEl = React.createRef()

  const AddPost = () => {
    debugger
    let text = newPostEl.current.value
    props.addPost(text)
  }


  return (
    <div className='myPosts'>
      New post
      <div className={cls.posts}>
        <div className={cls.new}>
          <textarea 
            ref={newPostEl} 
            className={cls.text}>
          </textarea>
        </div>

        <div className={cls.btn}>
          <button 
            onClick={AddPost} 
            className={cls.add}>
            Add post
          </button>
          <button className={cls.delete}>Delete</button>
        </div>
      </div>   
      <div className={cls.my}>My posts</div>

      <div className='posts'>{postElement}</div>
    </div>
  )
}

export default MyPosts