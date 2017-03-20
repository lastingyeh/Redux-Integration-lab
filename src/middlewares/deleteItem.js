// @flow

import { FETCH_DELETE_ITEM } from '../constants/actionTypes'

const deleteItem = (store: any) => (next: any) => (action: Object) => {

  if (action.type !== FETCH_DELETE_ITEM) return next(action)

  let deleteId = action.id

  fetch(`http://localhost:5555/items/${deleteId}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(res => {

      if (!res.ok) throw new Error(res.statusText)

      //return res.json()
      return action.cb(deleteId, store.dispatch)
    })
    .catch(err => console.log(err.message))

}

export default deleteItem