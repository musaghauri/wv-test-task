import { useEffect } from 'react'
import Head from 'next/head'
import { Input, Button, List, Space, Tag, Alert } from 'antd'
import {
  SearchOutlined,
  MessageOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { formatDistanceToNow } from 'date-fns'
import styled from 'styled-components'

import InviteStaffModal from '@/components/InviteStaffModal'
import DeleteUserModal from '@/components/DeleteUserModal'
import { listUsers } from '@/redux/user/actions'
import styles from '../styles/Home.module.css'

const ListWrapper = styled(Space)`
  display: flex;
  flex-direction:column;
  background: #f8f8f8;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 40px;
  padding-bottom: 40px;
`

const StyledList = styled(List)`
  background: white;
  border-radius: 20px;
  margin-top: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-width: 700px;
  padding-top: 10px;
`

const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
`

const Header = styled(Space)`
  padding-left: 23px;
  padding-right: 17px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Heading = styled.h3`
  color: #59a8a4;
  font-weight: bold;
`

const StyledInput = styled(Input)`
  border-radius: 15px;
  color: lightgray;
`

const TimeTag = styled(Tag)`
  border-radius: 12px;
`

const StartSessionButton = styled(Button)`
  color: #59a8a4;
  text-transform: uppercase;
  font-size: 12px;
`

const ChatButton = styled(Button)`
  color: #59a8a4;
  border: none;
`

const ListHeader = ({ attendeesCount }) => (
  <Header size="large">
    <Heading>
      {attendeesCount > 0
        ? `${attendeesCount} ${
            attendeesCount > 1 ? 'Attendees' : 'Attendee'
          } in Waiting Room`
        : 'No Attendee available'}
    </Heading>
    <Space>
      <StyledInput placeholder="Start typing..." suffix={<SearchOutlined />} />
      <InviteStaffModal>INVITE STAFF</InviteStaffModal>
    </Space>
  </Header>
)

const ListItem = ({ user }) => {
  const { name, createdAt, id: userId } = user
  return (
    <StyledListItem>
      <div>
        <Space align="center" size="small">
          {name}
          <TimeTag color="#62b4d0">
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </TimeTag>
        </Space>
      </div>
      <div>
        <Space align="center" size={1}>
          <StartSessionButton type="link">Start Session</StartSessionButton>
          <ChatButton icon={<MessageOutlined />} />
          <DeleteUserModal userId={userId}>
            <DeleteOutlined />
          </DeleteUserModal>
        </Space>
      </div>
    </StyledListItem>
  )
}

export default function Home() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const { users, errMessage } = user

  useEffect(() => {
    dispatch(listUsers())
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>React + Node Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ListWrapper>
          {!!errMessage && <Alert message={errMessage} type="error" />}
          <StyledList
            size="large"
            header={<ListHeader attendeesCount={users.length} />}
            dataSource={users}
            renderItem={(user) => <ListItem user={user} />}
          />
        </ListWrapper>
      </main>
    </div>
  )
}
