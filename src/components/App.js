// @flow
import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { onFetchLoadItems, onModalToggle, onFetchDeleteItem } from '../actions/items'

import TodoList from './TodoList'
import TodoItem from './TodoItem'
import TodoAddForm from './TodoAddForm'
import TodoEditForm from './TodoEditForm'
import TodoSearchForm from './TodoSearchForm'

// css
import '../style/bootstrap.css'
import '../style/animate.css'

// Modal use
import TodoModal from './TodoModal'

class App extends Component {

  componentDidMount() {
    this.props.onFetchLoadItems()
  }

  // 刪除資料 ＆ 關閉確認視窗
  onHandleDeleteItem = (id: number) => {

    const { onModalToggle, onFetchDeleteItem } = this.props

    onFetchDeleteItem(id)

    onModalToggle(null)
  }

  render() {

    const { searchedKeyword, items, sortType, isFilteringOut, modalToggle, onModalToggle } = this.props

    let itemList = (searchedKeyword.trim()) ?
      items.filter(item => (
        item.title.includes(searchedKeyword)
      ))
      : items

    switch (sortType) {
      case 'asc':
        itemList = itemList.sort((a, b) => (
          a.title.localeCompare(b.title, 'zh-Hans-TW-u-co-stroke')
        ))
        break
      case 'desc':
        itemList = itemList.sort((a, b) => (
          b.title.localeCompare(a.title, 'zh-Hans-TW-u-co-stroke')
        ))
        break
      default:
        itemList = itemList.sort((a, b) => (
          b.id - a.id
        ))
        break
    }

    return (
      <div className="row" style={{marginTop:'40'}}>
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Todo App With Redux</h3>
            </div>
            <div className="panel-body">
              <TodoAddForm placeholderText="加入清單" />
              <TodoSearchForm placeholderText="搜尋" />
              <TodoList>
                {
                  itemList.map((item, index) => {

                    if (isFilteringOut && item.isCompleted) {
                      return null
                    }

                    return (
                      (item.isEditing) ?
                        <TodoEditForm key={item.id}
                                      id={item.id}
                                      title={item.title}
                                      isCompleted={item.isCompleted} />
                        : <TodoItem key={item.id}
                                    id={item.id}
                                    isCompleted={item.isCompleted}
                                    title={item.title} />
                    )
                  })
                }
              </TodoList>

              <TodoModal isOpen={modalToggle.isShow}
                         onToggle={() => onModalToggle(null)}
                         extraMsg={modalToggle.itemInfo}
              >
                <button className="pull-right btn btn-danger"
                        onClick={() => this.onHandleDeleteItem(modalToggle.itemInfo.id)}>
                  刪除
                </button>
                <button className="pull-left btn btn-info"
                        onClick={() => onModalToggle(null)}>
                  取消
                </button>
              </TodoModal>

            </div>
            <div className="panel-footer">滑鼠連點 -> 編輯 ; 按下 'Enter' -> 結束編輯</div>
          </div>
        </div>
      </div>
    )
  }
}

// redux maps
const mapStateToProps = (state) => ({
  items: state.items,
  isFilteringOut: state.filterOut.isFilteringOut,
  searchedKeyword: state.searchedKeyword.keyword,
  sortType: state.sortType.direction,
  modalToggle: state.modalToggle,
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ onFetchLoadItems, onModalToggle, onFetchDeleteItem }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
