import {
  ASIDE_SET_ACTIVE_MENU_KEY
} from '../constant'

export const setMenuKey = ({ menuKey }) => ({
  type: ASIDE_SET_ACTIVE_MENU_KEY,
  payload: {
    menuKey
  }
})