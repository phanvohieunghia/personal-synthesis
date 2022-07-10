import { UserAddOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Input, Tooltip } from 'antd'
import styled from 'styled-components'

import Message from './message'

const WrapperStyled = styled.div`
	height: 100vh;
`
const HeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-item: center;
	padding: 0 10px;
	border-bottom: 1px solid #ccc;
	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.title {
		margin: 0;
		font-weight: 700;
	}
	.description {
		font-size: 1.2rem;
	}
`
const ButtonGroupStyled = styled.div`
	display: flex;
	align-items: center;
`
const ContentStyled = styled.div`
	height: calc(100% - 45px);
	display: flex;
	flex-direction: column;
	padding: 12px;
	justify-content: flex-end;
`
const MessageListStyled = styled.div`
	max-height: 100%;
	overflow-y: auto;
`

const FormStyled = styled(Form)`
	display: flex;
	align-ietms: center;
	padding: 2px 2px 2px 0;
	border: 1px solid #ccc;
	border-radius: 2px;
	.ant-form-item {
		flex-grow: 1;
		margin-bottom: 0;
	}
`
const Main = () => {
	return (
		<WrapperStyled>
			<HeaderStyled>
				<div className='info'>
					<p className='title'>Room 1</p>
					<span className='description'>Room 1 Title</span>
				</div>
				<ButtonGroupStyled>
					<Button icon={<UserAddOutlined />} type='text'>
						Invite
					</Button>
					<Avatar.Group size='small' maxCount={2}>
						<Tooltip title='A'>
							<Avatar>A</Avatar>
						</Tooltip>
						<Tooltip title='B'>
							<Avatar>B</Avatar>
						</Tooltip>
						<Tooltip title='C'>
							<Avatar>C</Avatar>
						</Tooltip>
					</Avatar.Group>
				</ButtonGroupStyled>
			</HeaderStyled>
			<ContentStyled>
				<MessageListStyled>
					<Message
						text='text'
						photoURL='null'
						displayName='Name'
						createdAt='25/4/2022'
					/>
					<Message
						text='text'
						photoURL='null'
						displayName='Name'
						createdAt='25/4/2022'
					/>
					<Message
						text='text'
						photoURL='null'
						displayName='Name'
						createdAt='25/4/2022'
					/>
					<Message
						text='text'
						photoURL='null'
						displayName='Name'
						createdAt='25/4/2022'
					/>
				</MessageListStyled>
				<FormStyled>
					<Form.Item>
						<Input
							placeholder='Input something ...'
							bordered={false}
							autoComplete='off'
						/>
					</Form.Item>
					<Button>Gui</Button>
				</FormStyled>
			</ContentStyled>
		</WrapperStyled>
	)
}

export default Main
