import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

// Sets token that is used in header - authorization
// in blog requests
const setToken = newToken => {
  newToken === null
    ? token = null
    : token = `bearer ${newToken}`
}

// Get all blogs
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

// Create a new blog
const create = async (blog) => {
  const config = {
    headers: { Authorization: token },
  }

  const response =  await axios.post(baseUrl, blog, config)
  return response.data
}

// Update a blog
const update = async (blog) => {
  const response = await axios.put(baseUrl, blog)
  return response.data
}

export default { setToken, getAll, create, update }