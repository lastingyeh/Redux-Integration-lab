// @flow

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onFetchUpdateItem } from '../actions/items'

import type { TodoEditFormProps } from '../definitions/TodoTypeDefs'

const TodoEditForm = ({ id, isCompleted, title, onFetchUpdateItem }:TodoEditFormProps) => {

  let titleField: any = null

  return (
    <li className="list-group-item">
      <input type="text"
             defaultValue={title}
             ref={el => titleField = el}
             autoFocus
             onBlur={e => {
                if(titleField.value.trim()
                  && e.target instanceof HTMLInputElement){

                  onFetchUpdateItem({
                    id,
                    title:titleField.value,
                    isCompleted,
                    isEditing:false,
                  })
                }
              }}
             onKeyPress={e => {
               if(titleField.value.trim()
                && e.target instanceof HTMLInputElement
                && e.key === 'Enter'){

                 onFetchUpdateItem({
                   id,
                   title:titleField.value,
                   isCompleted,
                   isEditing:false,
                 })
                }
             }}
      >
      </input>

    </li>
  )
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ onFetchUpdateItem }, dispatch)
)

export default connect(null, mapDispatchToProps)(TodoEditForm)

// cancel onBlur method
