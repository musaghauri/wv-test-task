import React, { useState } from 'react'
import { Modal, Tag, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { createUser } from '@/redux/user/actions'
import styled from 'styled-components'

const InviteButton = styled(Tag)`
  background: #edad41;
  color: white;
  border-radius: 17px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
`

const InviteStaffModal = ({ children }) => {
  const dispatch = useDispatch()
  const [staffName, setStaffName] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  async function handleInviteStaff(staffName) {
    if (!staffName) return
    dispatch(createUser(staffName))
    setIsModalVisible(false)
  }

  return (
    <>
      <InviteButton size="small" onClick={showModal}>
        {children}
      </InviteButton>
      <Modal
        title="Invite Staff"
        visible={isModalVisible}
        okText="Invite"
        onOk={() => handleInviteStaff(staffName)}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Name"
          value={staffName}
          onChange={(e) => setStaffName(e.target.value)}
        />
      </Modal>
    </>
  )
}

export default InviteStaffModal
