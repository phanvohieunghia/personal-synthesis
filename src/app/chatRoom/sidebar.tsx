import { Button, Row, Col, Avatar, Typography, Collapse } from 'antd'
import styled from 'styled-components'
import { PlusOutlined } from '@ant-design/icons'

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
const sidebar = () => {
	return (
		<SidebarStyled color={'#bd93f9'}>
			<Row>
				<Col span={24}>
					<UserInfoStyled>
						<div>
							<Avatar>A</Avatar>
							<Typography.Text className='text'>ABC</Typography.Text>
						</div>
						<Button ghost>Log out</Button>
					</UserInfoStyled>
				</Col>
				<Col span={24}>
					<Collapse ghost>
						<PanelStyled header='Room List' key={1}>
							<LinkStyled>Room 1</LinkStyled>
							<LinkStyled>Room 2</LinkStyled>
							<LinkStyled>Room 3</LinkStyled>
							<LinkStyled>Room 4</LinkStyled>
							<Button type='text' icon={<PlusOutlined />} className='add-room'>
								Add room
							</Button>
						</PanelStyled>
					</Collapse>
				</Col>
			</Row>
		</SidebarStyled>
	)
}

export default sidebar
