import {
  ASIDE_SET_ACTIVE_MENU_KEY
} from '../../constant'

// 简单模拟数据涞源，实际场景中应该是在app初始化时加一个初始化方法
import { menus as menuData, history as historyData, defaultMenuKey } from '../../mock/menu.js'

// 数据来源
const initialState = {
  activeMenuKey: defaultMenuKey,
  menuData: [...menuData],
  historyData: [...historyData]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ASIDE_SET_ACTIVE_MENU_KEY:
      return {
        ...state,
        activeMenuKey: action.payload.menuKey
      }
    default:
      return state
  }
}
