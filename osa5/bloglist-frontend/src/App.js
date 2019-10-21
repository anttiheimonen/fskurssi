import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import blogsService from './services/blogs'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'


const App = () => {
  const [ user, setUser] = useState(null)
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ blogs, setBlogs ] = useState([])

  useEffect(() => {
    // Get initial blogs
    // This should be changed to use async - await ?
    blogsService
      .getAll()
        .then(initialBlogs => {
          setBlogs(initialBlogs)
        })
  }, [])

  useEffect(() => {
    // get user info from local storage, if user is logged in
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleSignin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      console.log('User token kirjautumisesta ', user.token)

      blogsService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      console.log(user)

      window.localStorage.setItem('loggedUser', JSON.stringify(user))
    } catch (exception) {
      console.log("Error on signin")
    }
  }

  const userInfo = () => {
    return (
      <div>
        {user.name} is logged in
        <button onClick={ () => userLogOut() }> log out </button>
      </div>
      )
  }

  const userLogOut = () => {
    console.log('Logging out')
    window.localStorage.clear()
    blogsService.setToken(null)
    setUser(null)
  }

  const blogRows = () => {
    // console.log(blogs)
    blogs.map(blog => <Blog blog={blog} />)
    return (blogs.map(blog => <Blog key={blog.id} blog={blog} />))
  }

  const createNewBlog = async blog => {
    console.log(blog)
    const response = await blogsService.create(blog)
    console.log('vastaus ', response )
    setBlogs(blogs.concat(response))


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
      {userInfo()}
      <BlogForm submitFunction={(blog) => createNewBlog(blog) }></BlogForm>
      {blogRows()}
    </div>
  )
}

export default App;
