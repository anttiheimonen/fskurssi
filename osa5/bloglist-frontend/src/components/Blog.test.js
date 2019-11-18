import React from 'react'
import { render, fireEvent } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'



describe('Togglable Blog', () => {
  let component

  const blog = {
    author: 'Aku Ankka',
    title: 'Living in duckburg',
    likes: '4',
    user: {
      name: 'Tupu Ankka'
    }
  }

  const onClick = () => console.log('testing')

  beforeEach(() => {
    component = render(
      <Blog blog={blog} handleLike={onClick} handleRemove={onClick} canRemove={true} />
    )
  })

  test('blog\'s title and author is visible', () => {
    const titleDiv = component.container.querySelector('.header')
    expect(titleDiv).toHaveTextContent('Living in duckburg Aku Ankka')
  })

  test('blog\'s info is hidden by default', () => {
    const infoDiv = component.container.querySelector('.togglableContent')
    expect(infoDiv).toHaveStyle('display: none')
  })

  test('blog\'s info is vissible after one click', () => {
    const titleDiv = component.container.querySelector('.header')
    fireEvent.click(titleDiv)

    const infoDiv = component.container.querySelector('.togglableContent')
    expect(infoDiv).not.toHaveStyle('display: none')
  })

  test('blog\'s info is hidden after two clicks', () => {
    const titleDiv = component.container.querySelector('.header')
    fireEvent.click(titleDiv)
    fireEvent.click(titleDiv)

    const infoDiv = component.container.querySelector('.togglableContent')
    expect(infoDiv).toHaveStyle('display: none')
  })

})