import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import blogsService from './services/blogs'
import Blog from './components/Blog'
// import './App.css'


const App = () => {
  const [ user, setUser] = useState(null)
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ blogs, setBlogs ] = useState([])

  useEffect(() => {
    // This should be changed to use async - await !!!
    blogsService
      .getAll()
        .then(initialBlogs => {
          setBlogs(initialBlogs)
        })
  }, [])

  const handleSignin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log("Error on signin")
    }
  }

  const blogRows = () => {
    // console.log(blogs)
    blogs.map(blog => <Blog blog={blog} />)
    return (blogs.map(blog => <Blog key={blog.id} blog={blog} />))
  }

  if (user === null) {
    return (
      <form onSubmit={handleSignin}>
        <div><h2>Log in</h2></div>
        <div>
          <input
            type='text'
            placeholder='Username'
            value={username}
            name='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
          <input
          type='password'
            placeholder='Password'
            value={password}
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
           <button type="submit">login</button>
        </div>
      </form>
    )
  }

  return (
    <div>
      <h2>Blogs</h2>
      {blogRows()}
    </div>
  )
}

export default App;
