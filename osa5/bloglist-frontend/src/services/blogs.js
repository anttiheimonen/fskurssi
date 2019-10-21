import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  newToken === null
    ? token = null
    : token = `bearer ${newToken}`
  console.log('Token asetettu: ', token)
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (blog) => {
  console.log(blog)
  const config = {
    headers: { Authorization: token },
  }

  const response =  await axios.post(baseUrl, blog, config)
  return response.data
}

export default { setToken, getAll, create }