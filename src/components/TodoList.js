// @flow
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import type { TodoListProps } from '../definitions/TodoTypeDefs'

import { onItemFilterOut, onItemSort } from '../actions/items'


const TodoList = ({ children, onItemFilterOut, onItemSort, sortType }:TodoListProps) => {

  let sortTypeIndex: number = ['no', 'asc', 'desc'].findIndex(value => value === sortType)

  return (
    <div>
      <div style={{marginTop:20,marginBottom:20}}>

        <label>
          <input type="checkbox"
                 defaultChecked
                 onClick={onItemFilterOut} />
          包含已完成
        </label>
        <button className={`${(sortTypeIndex === 0)?'btn btn-default':'btn btn-success'} pull-right`}
                onClick={() => {
                onItemSort({direction:(sortType === 'asc')?'desc':'asc'})}}
                disabled={(React.Children.count(children))?false:true}
        >
          按筆畫排序 : {['no', 'asc', 'desc'][sortTypeIndex]}
        </button>

      </div>

      <ul className="list-group">
        {children}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({ sortType: state.sortType.direction })

const mapDispatchToProps = dispatch => (
  bindActionCreators({ onItemFilterOut, onItemSort }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)