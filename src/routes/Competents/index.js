import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : '',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Competents = require('./containers/CompetentsContainer').default
      const reducer = require('./modules/competents').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'competents', reducer })

      /*  Return getComponent   */
      cb(null, Competents)

      /* Webpack named bundle   */
    }, 'competents')
  }
})
