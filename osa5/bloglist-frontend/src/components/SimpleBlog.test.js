import React from 'react'
import { render } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('renders content', () => {
  const blog = {
    author: 'Aku Ankka',
    title: 'Living in duckburg',
    likes: '4'
  }

  const onClick = () => console.log('testing')

  const component = render(
    <SimpleBlog blog={blog} onClick={onClick} />
  )

  const header = component.container.querySelector('.header')
  expect(header).toHaveTextContent(
    'Living in duckburg Aku Ankka'
  )

  const content = component.container.querySelector('.content')
  expect(content).toHaveTextContent(
    'blog has 4 likes'
  )
})