import React from 'react';
import Post from './Post/Post'
import cls from './MyPosts.module.css'

const MyPosts = (props) => {

  let newPostEl = React.createRef()

  const AddPost = () => {
    // let text = document.getElementById('new-post').value
    let text = newPostEl.current.value
    alert(text)
  }
  const DeletePost = () => alert('Удалить сообщение?')

  let postElement = props.posts.map((el) => (
    <Post message={el.message} like={el.like} />
  ))

  return (
    <div className='myPosts'>
      New post
      <div className={cls.posts}>
        <div className={cls.new}>
          {/* <textarea id='new-post' className={cls.text}></textarea> */}
          <textarea ref={newPostEl} className={cls.text}></textarea>
        </div>
        <div className={cls.btn}>
          <button onClick={AddPost} className={cls.add}>
            Add post
          </button>
          <button onClick={DeletePost} className={cls.delete}>
            Delete
          </button>
        </div>
      </div>
      <div className={cls.my}>My posts</div>
      <div className='posts'>{postElement}</div>
    </div>
  )
}

export default MyPosts