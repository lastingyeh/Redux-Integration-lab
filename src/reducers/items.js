// @flow
import {
  ADD_ITEM,
  INIT_ITEMS,
  UPDATE_ITEM,
  DELETE_ITEM,
} from '../constants/actionTypes'

import type { Item } from '../definitions/TodoTypeDefs'

const items = (state: Array<Item> = [], action: Object) => {

  switch (action.type) {

    case ADD_ITEM:
      return [action.payload, ...state]

    case INIT_ITEMS:
      return [...action.payload]

    case UPDATE_ITEM:
      const newItems = [...state]

      const index = newItems.findIndex(item => item.id === action.payload.id)

      if (index === -1) return newItems

      newItems[index] = action.payload

      return newItems

    case DELETE_ITEM:
      const aItems = [...state]

      const aIndex = aItems.findIndex(item => item.id === action.payload)

      if (aIndex === -1) return aItems

      return aItems.slice(0, aIndex).concat(aItems.slice(aIndex + 1, aItems.length))

    default:
      return state
  }
}

export default items