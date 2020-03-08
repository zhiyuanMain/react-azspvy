import { combineReducers } from 'redux'
import user from './user'
import aside from './aside'
import agentWorkflow from './agentWorkflow'

const rootReducer = combineReducers({
  user,
  aside,
  agentWorkflow
})

export default rootReducer
