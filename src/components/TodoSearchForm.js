// @flow
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { onItemSearch } from '../actions/items'

import type { TodoSearchFormProps } from '../definitions/TodoTypeDefs'

const TodoSearchForm = ({ placeholderText, onItemSearch }:TodoSearchFormProps) => {

  let titleField: any = null

  let isOnComposition: boolean = false

  const isChrome = !!window.chrome && !!window.chrome.webstore

  const handleComposition = (e: KeyboardEvent) => {

    if (e.type === 'compositionend') {

      isOnComposition = false

      if (e.target instanceof HTMLInputElement
        && !isOnComposition
        && isChrome) {

        onItemSearch({ keyword: titleField.value })
      }
    } else {
      isOnComposition = true
    }
  }

  return (
    <div>
      <input className="form-control"
             type="text"
             ref={el => titleField=el}
             placeholder={placeholderText}
             onCompositionStart={handleComposition}
             onCompositionUpdate={handleComposition}
             onCompositionEnd={handleComposition}
             onChange={(e:KeyboardEvent) => {

               if(e.target instanceof HTMLInputElement
                && !isOnComposition){

                 onItemSearch({keyword:titleField.value})
                }
             }}
      />
    </div>
  )
}


const mapDispatchToProps = dispatch => (
  bindActionCreators({ onItemSearch }, dispatch)
)

export default connect(null, mapDispatchToProps)(TodoSearchForm)