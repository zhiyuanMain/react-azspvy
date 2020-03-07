import {
  USER_INIT
} from '../../constant'
// 数据来源
const initialState = {
  name: '',
  age: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_INIT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
