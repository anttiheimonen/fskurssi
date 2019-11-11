import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

const Blog = React.forwardRef(({ blog, handleLike, handleRemove, canRemove }, ref) => {
  const [visible, setVisible] = useState(false)

  const blogStyle = {
    paddingTop: 5,
    paddingLeft: 2,
    background: 'lightgray',
    borderradius: 10,
    borderWidth: 1,
    marginBottom: 10
  }

  // Style for open and close states of a blog element
  const showWhenOpen = { display: visible ? '' : 'none' }
  // Style for remove button's div
  const showWhenRemovable = { display: canRemove ? '' : 'none' }

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
        <div style={showWhenRemovable}>
          <button onClick={() => handleRemove(blog)}>Remove</button>
        </div>
      </div>
    </div>
  )
})

// PropTypes definitions of props
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  canRemove: PropTypes.bool.isRequired
}

export default Blog