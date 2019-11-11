import React, { useState } from 'react'

const BlogForm = ( { submitFunction } ) => {
  const [ title, setTitle ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ url, setUrl ] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const blog = {
      title: title,
      author: author,
      url: url
    }
    submitFunction(blog)
  }

  return (
    <form onSubmit={submit}>
      <h2>Create New</h2>
      <p>Blog Form</p>
      <div>
        <label htmlFor='title'>title</label>
        <input
          type='text'
          onChange={({ target }) => setTitle(target.value)}
          value={title}
          name='title'
          id='title'/>
      </div>

      <div>
        <label htmlFor='author'>author</label>
        <input
          type='text'
          onChange={({ target }) => setAuthor(target.value)}
          value={author}
          name='author'
          id='author'/>
      </div>

      <div>
        <label htmlFor='url'>url</label>
        <input
          type='text'
          onChange={({ target }) => setUrl(target.value)}
          value={url}
          name='url'
          id='url'/>
      </div>

      <button type='submit'>Add</button>
    </form>)
}

export default BlogForm