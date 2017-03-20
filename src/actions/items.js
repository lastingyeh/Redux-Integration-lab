// @flow

import{
  FETCH_ADD_ITEMS,
  FETCH_LOAD_ITEMS,
  INIT_ITEMS,
  ADD_ITEM,
  SEARCH_ITEMS,
  TOGGLE_FILTER,
  SORT_ITEMS,
  UPDATE_ITEM,
  DELETE_ITEM,
  FETCH_UPDATE_ITEM,
  FETCH_DELETE_ITEM,
  TOGGLE_MODAL,
} from '../constants/actionTypes'

import type { Item } from '../definitions/TodoTypeDefs'

// onFetchLoadItems -> onInitData
export const onInitData = (items: Array<Item>) => ({
  type: INIT_ITEMS,
  payload: items,
})

// onFetchAddItem -> onItemAdd
export const onItemAdd = (payload: Item) => ({
  type: ADD_ITEM,
  payload,
})

// components/TodoSearchForm/props
export const onItemSearch = (payload: { keyword:string }) => ({
  type: SEARCH_ITEMS,
  payload,
})

// components/TodoList/props
export const onItemFilterOut = () => ({
  type: TOGGLE_FILTER
})

export const onItemSort = (payload: { direction:string }) => ({
  type: SORT_ITEMS,
  payload,
})

// components/TodoItem/props
export const onItemEdit = (payload: Item) => ({
    type: UPDATE_ITEM,
    payload,
  }
)

// onFetchUpdateItem -> onItemUpdate
export const onItemUpdate = (payload: Item) => ({
  type: UPDATE_ITEM,
  payload,
})

// onFetchDeleteItem -> onItemDelete
export const onItemDelete = (payload: number) => ({
  type: DELETE_ITEM,
  payload,
})

export const onModalToggle = (payload: { id:number, title:string }) => ({
  type: TOGGLE_MODAL,
  payload,
})

// ------------------------------Send to applyMiddleware------------------------------ //

// components/App/props
export const onFetchLoadItems = () => ({
  type: FETCH_LOAD_ITEMS,
  cb: (response: Array<Item>, dispatch: Function) => dispatch(onInitData(response))
})

// components/TodoAddForm/props
export const onFetchAddItem = (item: Item) => ({
  type: FETCH_ADD_ITEMS,
  item,
  cb: (response: Item, dispatch: Function) => dispatch(onItemAdd(response))
})

// components/TodoItem/props
export const onFetchUpdateItem = (item: Item) => ({
  type: FETCH_UPDATE_ITEM,
  item,
  cb: (response: Item, dispatch: Function) => dispatch(onItemUpdate(response))
})

// components/TodoEditForm/props
export const onFetchDeleteItem = (id: number) => ({
  type: FETCH_DELETE_ITEM,
  id,
  cb: (response: number, dispatch: Function) => dispatch(onItemDelete(response))
})

