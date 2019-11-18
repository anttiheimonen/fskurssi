import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
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


test('clicking like button twice fire two events', async () => {
  const blog = {
    author: 'Aku Ankka',
    title: 'Living in duckburg',
    likes: '4'
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)
  expect(mockHandler.mock.calls.length).toBe(2)
})