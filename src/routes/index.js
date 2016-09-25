// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import CompetentRoute from './Competents/index'
import VerifyRoute from './Verify/index'
import LoginRoute from './Login/index'
import RegistryRoute from './Registry/index'
import IssuesRoute from './Issues/index'
import ProfileRoute from './Profile/index'
import TasksRoute from './Tasks/index'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : CompetentRoute(store),
  childRoutes : [
    LoginRoute(store),
    VerifyRoute(store),
    LoginRoute(store),
    RegistryRoute(store),
    IssuesRoute(store),
    ProfileRoute(store),
    TasksRoute(store)
  ]
})

export default createRoutes
