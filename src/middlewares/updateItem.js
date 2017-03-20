// @flow

import { FETCH_UPDATE_ITEM } from '../constants/actionTypes'

const updateItem = (store: any) => (next: any) => (action: Object) => {

  if (action.type !== FETCH_UPDATE_ITEM) return next(action)

  const { id, title, isCompleted } = action.item
  const payloadForDatabase = { id, title, isCompleted }

  fetch(`http://localhost:5555/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payloadForDatabase)
  })
    .then(res => {
      if (!res.ok) throw new Error(res.statusText)

      return res.json()
    })
    .then(item => {

      const stateItem = ({ ...item, isEditing: false })

      return action.cb(stateItem, store.dispatch)
    })
    .catch(err => console.error(err.message))
}

export default updateItem