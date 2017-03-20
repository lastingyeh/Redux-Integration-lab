// @flow
import { SORT_ITEMS } from '../constants/actionTypes'

const sortType = (state: { direction:string } = { direction: 'no' }, action: Object) => {

  switch (action.type) {

    case SORT_ITEMS:

      return { ...state, direction: action.payload.direction }

    default:
      return state
  }
}

export default sortType