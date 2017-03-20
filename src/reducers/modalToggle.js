// @flow
import { TOGGLE_MODAL } from '../constants/actionTypes'

const modalToggle = (state: { isShow:boolean, itemInfo:{ id:number, title:string } } = {
  isShow: false,
  itemInfo: { id: -1, title: '' }
}, action: Object) => {

  switch (action.type) {

    case TOGGLE_MODAL:
      return { isShow: !state.isShow, itemInfo: action.payload }

    default:
      return state
  }
}

export default modalToggle
