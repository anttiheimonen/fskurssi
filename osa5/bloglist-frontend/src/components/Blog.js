import React, { useState, useImperativeHandle } from 'react'

// const Blog = React.forwardRef((props, ref) => {
const Blog = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div onClick={toggleVisibility}>>
      {props.blog.title} {props.blog.author}
    </div>
  )
})

export default Blog