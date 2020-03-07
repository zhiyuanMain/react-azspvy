import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

const configureStore = () => {

  // use Redux DevTools
  /*eslint-disable */
  const composeSetup =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose
  /*eslint-enable */

  const store = createStore(
    reducer,
    composeSetup(applyMiddleware(thunkMiddleware))
  )
  return store
}

export default configureStore()
