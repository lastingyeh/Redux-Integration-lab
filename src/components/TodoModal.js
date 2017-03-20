// @flow
import React from 'react'
import Modal from 'react-modal'

import type { TodoModalProps } from '../definitions/TodoTypeDefs'

const TodoModal = ({ children, isOpen, onToggle, extraMsg }:TodoModalProps) => {

  let titleField: any = null

  let itemTitle = (extraMsg) ? extraMsg.title : ''

  const customStyles = {
    content: {
      borderRadius: '10px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      minWidth: '300px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={() => {titleField.style.color = '#A02'}}
      onRequestClose={onToggle}
      style={customStyles}
      contentLabel="Example Modal">
      <h4 ref={rel => { titleField = rel }}>是否刪除資料</h4>
      <hr />
      <h4>{itemTitle}</h4>
      <hr />
      {children}
    </Modal>
  )
}
export default TodoModal