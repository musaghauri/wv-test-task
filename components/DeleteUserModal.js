import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { deleteUser } from '@/redux/user/actions'
import styled from 'styled-components'

const DeleteButton = styled(Button)`
  color: #59a8a4;
  border: none;
`

const deleteUserModal = ({ userId, children }) => {
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  async function hanldeDeleteUser(userId) {
    dispatch(deleteUser(userId))
    setIsModalVisible(false)
  }

  return (
    <>
      <DeleteButton size="small" onClick={showModal}>
        {children}
      </DeleteButton>
      <Modal
        title="Delete User"
        visible={isModalVisible}
        okType="danger"
        okText="Delete"
        onOk={() => hanldeDeleteUser(userId)}
        onCancel={handleCancel}
      >
        Are you sure you wanna delete this user?
      </Modal>
    </>
  )
}

export default deleteUserModal
