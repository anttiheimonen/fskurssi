import React, { useState, useImperativeHandle } from 'react'

const Blog = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)
  const [likes, setLikes] = useState(props.blog.likes)

  const blogStyle = {
    paddingTop: 5,
    paddingLeft: 2,
    background: 'lightgray',
    borderradius: 10,
    borderWidth: 1,
    marginBottom: 10
  }

  const showWhenOpen = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  // Returns a collapsible blog element
  return (
    <div style={blogStyle}>
      <div onClick={toggleVisibility}>
        {props.blog.title} {props.blog.author}
      </div>
      <div style={showWhenOpen}>
        <div>{props.blog.url}</div>
        <div>Likes {likes} <button onClick={() => setLikes(likes+1)}>Like</button></div>
        <div>Added by {props.blog.user.username}</div>
      </div>
    </div>
  )
})

export default Blog