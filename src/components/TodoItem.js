// @flow
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onItemEdit, onFetchUpdateItem, onModalToggle } from '../actions/items'

import type { TodoItemProps } from '../definitions/TodoTypeDefs'

const TodoItem = ({ id, title, isCompleted, onFetchUpdateItem, onItemEdit, onModalToggle, }:TodoItemProps) => (

  <li onDoubleClick={() => {

        console.log('TodoItem isCompleted',isCompleted)

        onItemEdit({
          id,
          title,
          isCompleted,
          isEditing:true,
        })
      }}
      className={isCompleted ? 'list-group-item list-group-item-danger animated fadeIn'
                              :'list-group-item list-group-item-success animated bounce'
      }>
    <input type="checkbox"
           defaultChecked={isCompleted}
           onClick={()=>{

             onFetchUpdateItem({
               id,
               title,
               isCompleted:!isCompleted,
               isEditing:false,
             })
           }}
    />
    {' '}
    {title}
    <button className="pull-right"
            style={{"borderRadius":10,"border":2}}
            onMouseDown={(e)=>{

                if(e.target instanceof HTMLButtonElement){
                  onModalToggle({id,title})
                }

                e.preventDefault()
              }}>
      刪除
    </button>
  </li>
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({ onItemEdit, onFetchUpdateItem, onModalToggle, }, dispatch)
)

export default connect(null, mapDispatchToProps)(TodoItem)