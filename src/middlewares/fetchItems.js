// @flow
import { FETCH_LOAD_ITEMS } from '../constants/actionTypes'

const fetchItems = (store: any) => (next: any) => (action: Object) => {

  if (action.type !== FETCH_LOAD_ITEMS) return next(action)

  fetch('http://localhost:5555/items?_sort=id&_order=DESC', {
    method: 'GET'
  })
    .then(res => {
      if (!res.ok) throw new Error(res.statusText)

      return res.json()
    })
    .then(itemList => {

      const items = itemList.map(item => ({ isEditing: false, ...item }))

      return action.cb(items, store.dispatch)
    })
    .catch(err => console.error(err.message))
}

export default fetchItems