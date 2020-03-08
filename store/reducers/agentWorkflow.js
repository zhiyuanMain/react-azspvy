import {
  AGENTWORKFLOW_CONCAT_LIST,
  AGENTWORKFLOW_DELETE_BADGE_BY_ID,
  AGENTWORKFLOW_REQUESTING
} from '../../constant'

import { agentList } from '../../mock/agentList'

// 数据来源
const initialState = {
  isLoading: false,
  list: [...agentList]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case AGENTWORKFLOW_CONCAT_LIST:
      const gList = [...state.list, ...action.payload.list]
      return {
        ...state,
        list: gList
      }
    case AGENTWORKFLOW_DELETE_BADGE_BY_ID:
      const { rowId, itemIndex } = action.payload
      const prevList = [...state.list]
      prevList.forEach(row => {
        if(row.id === rowId) {
          row.list.splice(itemIndex, 1)
        }
      })
      return {
        ...state,
        list: prevList
      }
    case AGENTWORKFLOW_REQUESTING: 
      return  {
        ...state,
        isLoading: action.payload.isLoading
      }
    default:
      return state
  }
}
