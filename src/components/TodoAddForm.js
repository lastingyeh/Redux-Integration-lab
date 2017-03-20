// @flow
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onFetchAddItem } from '../actions/items'

import type { TodoAddFormProps } from '../definitions/TodoTypeDefs'

const TodoAddForm = ({ placeholderText, onFetchAddItem }:TodoAddFormProps) => {

  let titleField: any = null

  return (
    <div>
      <input className="form-control"
             type="text"
             ref={el => {titleField = el}}
             placeholder={placeholderText}
             onKeyPress={(e) => {

               if(titleField.value.trim()
                  && e.target instanceof HTMLInputElement
                  && e.key === 'Enter'){

                    onFetchAddItem({
                      id:+new Date(),
                      title:titleField.value,
                      isCompleted:false,
                      isEditing:false,
                    })

                    titleField.value = ''
                  }
             }} />
    </div>
  )
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ onFetchAddItem }, dispatch)
)

export default connect(null, mapDispatchToProps)(TodoAddForm)
