// @flow
import { SEARCH_ITEMS } from '../constants/actionTypes'

const searchedKeyword = (state: { keyword:string } = { keyword: '' }, action: Object) => {

  switch (action.type) {

    case SEARCH_ITEMS:
      return { ...state, keyword: action.payload.keyword }
    default:
      return state
  }
}

export default searchedKeyword