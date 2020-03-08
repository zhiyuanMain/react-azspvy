import {
  AGENTWORKFLOW_CONCAT_LIST,
  AGENTWORKFLOW_DELETE_BADGE_BY_ID
} from '../constant'

export const concatAgentList = ({ list = [] }) => ({
  type: AGENTWORKFLOW_CONCAT_LIST,
  payload: {
    list
  }
})

export const deleteRowItemById = ({ rowId, itemIndex }) => ({
  type: AGENTWORKFLOW_DELETE_BADGE_BY_ID,
  payload: {
    rowId,
    itemIndex
  }
})