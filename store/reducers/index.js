import { combineReducers } from 'redux'
import user from './user'
import aside from './aside'

const rootReducer = combineReducers({
  user,
  aside
})

export default rootReducer
