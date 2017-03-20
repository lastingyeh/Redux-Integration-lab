import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import * as reducers from './reducers'

import { fetchItems, addItem, updateItem, deleteItem, } from './middlewares'

const reducer = combineReducers({ ...reducers })

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(fetchItems, addItem, updateItem, deleteItem))

import App from './components/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


