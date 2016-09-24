import React from 'react'
import { LoginView } from 'routes/Login/components/LoginView'
import { render } from 'enzyme'

describe('(View) Login', () => {
  let _component

  beforeEach(() => {
    _component = render(<LoginView />)
  })

  it('Renders title', () => {
    const title = _component.find('h1')
    expect(title).to.exist
    expect(title.text()).to.match(/Login/)
  })

  it('Renders login form', () => {
    const loginForm = _component.find('form')
    expect(loginForm).to.exist
    expect(loginForm.children().length).to.equal(3)
  })
})
