import { useContext } from 'react'
import { Button, Row, Col, Avatar, Typography, Collapse } from 'antd'
import styled from 'styled-components'
import { PlusOutlined } from '@ant-design/icons'
import { signOut } from 'firebase/auth'

import { auth } from 'firebases/config'
import { AuthContext } from 'app/chat/context/authProvider'
import { AppContext } from 'app/chat/context/appProvider'

const SidebarStyled = styled.div.attrs((props) => ({
	color: props.color,
}))`
	background: ${(props) => props.color};
	color: #000;
	height: 100vh;
`
const UserInfoStyled = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 12px 16px;
	border-bottom: 1px solid #ccc;
	.text {
		margin-left: 6px;
	}
`
const PanelStyled = styled(Collapse.Panel)`
	.add-room {
		color: #fff;
		border: 1px solid #fff;
	}
`
const LinkStyled = styled(Typography.Link)`
	&& {
		display: block;
		color: #000;
		margin-bottom: 6px;
		margin-left: 20px;
	}
`

const Sidebar = () => {
	const data = useContext(AuthContext)
	const { rooms, setIsAddRoomVisible } = useContext(AppContext)
	const handleRoomModal = () => {
		setIsAddRoomVisible(true)
	}
	return (
		<SidebarStyled color={'#bd93f9'}>
			<Row>
				<Col span={24}>
					<UserInfoStyled>
						<div>
							<Avatar src={data.photoURL}>
								{data.photoURL ? '' : data.photoURL?.charAt(0)?.toUpperCase()}
							</Avatar>
							<Typography.Text className='text'>
								{data.displayName}
							</Typography.Text>
						</div>
						<Button ghost onClick={() => signOut(auth)}>
							Log out
						</Button>
					</UserInfoStyled>
				</Col>
				<Col span={24}>
					<Collapse ghost>
						<PanelStyled header='Room List' key={1}>
							{rooms.map((room: any, i: any) => (
								<LinkStyled key={i}>{room.name}</LinkStyled>
							))}
							<Button
								type='text'
								icon={<PlusOutlined />}
								className='add-room'
								onClick={handleRoomModal}>
								Add room
							</Button>
						</PanelStyled>
					</Collapse>
				</Col>
			</Row>
		</SidebarStyled>
	)
}

export default Sidebar
