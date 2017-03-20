// @flow
export type Item = {
  id:number,
  title:string,
  isCompleted:boolean,
  isEditing:boolean,
}

export type SortType = ''|'asc'|'desc'

export type TodoAddFormProps = {

  placeholderText:string,
  onFetchAddItem:(x: Item)=>void,
}

export type TodoSearchFormProps ={
  placeholderText:string,
  onItemSearch:Function,
}

export type TodoListProps = {
  children?:React$Element<*>,
  onItemFilterOut:Function,
  onItemSort:Function,
  sortType:SortType,
}

export type TodoItemProps = {
  id:number,
  title:string,
  isCompleted:boolean,
  onFetchUpdatedItem:Function,
  onItemEdit:Function,
  onFetchDeleteItem:Function,
  onModalToggle:Function,
}

export type TodoEditFormProps = {
  id:number,
  isCompleted:boolean,
  title:string,
  onFetchUpdateItem:Function,
}

export type TodoModalProps = {
  children?:React$Element,
  isOpen:boolean,
  onToggle:Function,
  extraMsg:{ id:number, title:string },
}

