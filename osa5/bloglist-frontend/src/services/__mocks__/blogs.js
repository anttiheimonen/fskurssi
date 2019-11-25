const blogs = [
  {
    id: '5da9eaa765ed354b70e57b60',
    author: 'Donald Duck',
    title: 'Duckburg life',
    url: 'http://example.com',
    likes: 16,
    user: {
      id: '5da98d7eb27c671aee529654',
      username: 'aankka',
      name: 'Aku Ankka'
    }
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll }