// @flow
import { FETCH_ADD_ITEMS } from '../constants/actionTypes'

const addItem = (store: any) => (next: any) => (action: Object) => {

  if (action.type !== FETCH_ADD_ITEMS) return next(action)

  const { id, title, isCompleted } = action.item
  const payloadForDatabase = { id, title, isCompleted }

  fetch('http://localhost:5555/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payloadForDatabase)
  })
    .then(res => {
      if (!res.ok) throw new Error(res.statusText)

      return res.json()
    })
    .then(item => action.cb(item, store.dispatch))
    .catch(err => {
      console.error(err.message)
    })
}

export default addItem