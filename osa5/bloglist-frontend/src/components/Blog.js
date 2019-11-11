import React, { useState, useImperativeHandle } from 'react'

const Blog = React.forwardRef(({blog, handleLike, handleRemove}, ref) => {
  const [visible, setVisible] = useState(false)

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
        {blog.title} {blog.author}
      </div>
      <div style={showWhenOpen}>
        <div>{blog.url}</div>
        <div>Likes {blog.likes} <button onClick={() => handleLike(blog)}>Like</button></div>
        <div>Added by {blog.user.name}</div>
        <button onClick={() => handleRemove(blog)}>Remove</button>
      </div>
    </div>
  )
})

export default Blog