import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import blogsService from './services/blogs'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'


const App = () => {
  const [ user, setUser] = useState(null)
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ blogs, setBlogs ] = useState([])
  const [ notification, setNotification ] = useState(null)

  useEffect(() => {
    // Initialize blogs state with sorted list of blogs
    async function initializeBlogs() {
      const initialBlogs = await blogsService.getAll()
      initialBlogs.sort(sortByLikes)
      setBlogs(initialBlogs)
    }
    initializeBlogs()
  }, [])

  useEffect(() => {
    // get user info from local storage, if user is logged in
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogsService.setToken(user.token)
    }
  }, [])

  const notify = message => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)}, 3000
    )
  }

  const handleSignin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      blogsService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')

      window.localStorage.setItem('loggedUser', JSON.stringify(user))
    } catch (exception) {
      notify('Login failed')
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
    return (blogs.map(blog => <Blog
      key={blog.id}
      blog={blog}
      handleLike={handleLike}
      handleRemove={handleRemove}
      canRemove={blog.user.username === user.username} />))
  }

  const blogFormRef = React.createRef()

  const createNewBlog = async blog => {
    try {
      blogFormRef.current.toggleVisibility()
      const response = await blogsService.create(blog)

      // My backend does not populate user field with user information
      // on reponses to new entries. This is a work around so new blog
      // entry gets name of the person who added it without reloading.
      const tempUser = {...user}
      response.user = tempUser

      setBlogs(blogs.concat(response))
      notify(`New blog by ${response.title} by ${response.author} added `)
    } catch (exception) {
      console.log(exception)
      notify('Error happened while adding a new blog')
    }
  }

  const loginForm = () => (
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

  const blogForm = () => (
    <div>
      <h2>Blogs</h2>
      {userInfo()}
      <Togglable buttonLabel='Add a new blog' ref={blogFormRef} >
        <BlogForm submitFunction={(blog) => createNewBlog(blog) } />
      </Togglable>
      {blogRows()}
    </div>
  )

  const sortByLikes = (a, b) => b.likes - a.likes

  // Add one like to a blog and send it to server
  const handleLike = async blog => {
    // console.log(`Liked blog ${blog.id}`)
    // console.log(blog)
    const updatedBlog = {
      'id': blog.id,
      'author': blog.author,
      'title': blog.title,
      'url': blog.url,
      'likes': blog.likes + 1,
      'user': blog.user.id
    }

    const response = await blogsService.update(updatedBlog)
    const updatedBlogs = blogs.map( b => b.id === response.id ? response : b )
    // Sort list
    updatedBlogs.sort((a,b) => sortByLikes(a,b) )
    // console.log(updatedBlogs)
    setBlogs(updatedBlogs)
  }

  const handleRemove = async blog => {
    console.log(`Removing ${blog.id}`)
    console.log(blog)
    const confirm = window.confirm(`Remove blog ${blog.title} by ${blog.author}`)
    if(!confirm){
      return
    }

    // Remove from server
    const response = await blogsService.remove(blog)
    // remove from state and webpage if removed from server
    if (response === 204) {
      notify(`Blog ${blog.title} by ${blog.author} removed`)
      setBlogs(blogs.filter( b => b.id !== blog.id ))
    } else {
      notify(`You are not authorized to remove blog ${blog.title} by ${blog.author}`)
    }
  }

  return (
    <div>
      <Notification message={notification}></Notification>
      {(user === null) ?
        loginForm() :
        blogForm()}
    </div>
  )
}

export default App
