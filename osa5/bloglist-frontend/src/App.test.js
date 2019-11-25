import React from 'react'
import { render, waitForElement } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'
jest.mock('./services/blogs')
import App from './App'


describe('App test', () => {
  test('Logged out user gets only logging form', async () => {
    let component = render(
      <App />
    )

    component.rerender(<App />)

    // await waitForElement(
    //   () => component.debug()
    // )

    expect(component.container).toHaveTextContent('Log in')

  })

})