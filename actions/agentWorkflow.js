import {
  AGENTWORKFLOW_CONCAT_LIST,
  AGENTWORKFLOW_DELETE_BADGE_BY_ID,
  AGENTWORKFLOW_REQUESTING
} from '../constant'

export const concatAgentList = ({ list = [] }) => dispatch => {
  dispatch(setRequestingStatus({
    isLoading: true
  }))
  return new Promise(resolve => {
    setTimeout(() => {
      dispatch({
        type: AGENTWORKFLOW_CONCAT_LIST,
        payload: {
          list
        }
      })
      resolve()
    }, 1000)
  })
}

export const deleteRowItemById = ({ rowId, itemIndex }) => ({
  type: AGENTWORKFLOW_DELETE_BADGE_BY_ID,
  payload: {
    rowId,
    itemIndex
  }
})

export const setRequestingStatus = ({ isLoading }) => ({
  type: AGENTWORKFLOW_REQUESTING,
  payload: {
    isLoading
  }
})