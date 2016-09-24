import LoginRoute from 'routes/Login'
import LoginView from 'routes/Login/components/LoginView'


describe('(Route) Counter', () => {
  let _route

  beforeEach(() => {
    _route = LoginRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `login`', () => {
    expect(_route.path).to.equal('login')
  })

  it('Configuration should contain component LoginView', () => {
    expect(_route.component).to.equal(LoginView)
  })
})
