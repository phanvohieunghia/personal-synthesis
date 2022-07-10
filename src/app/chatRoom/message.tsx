import { Avatar, Typography } from 'antd'
import styled from 'styled-components'

interface IMessgaeProps {
	text: string
	displayName: string
	createdAt: string
	photoURL: string
}

const WrapperStyled = styled.div`
	margin-bottom: 10px;
	.author {
		margin-left: 6px;
		font-weight: 700;
	}
	.date {
		margin-left: 10px;
		font-size: 1.1rem;
	}
	.content {
		margin-left: 30px;
	}
`
const Message = (props: IMessgaeProps) => {
	const { text, displayName, createdAt, photoURL } = props
	return (
		<WrapperStyled>
			<div>
				<Avatar src={photoURL} size='small'>
					A
				</Avatar>
				<Typography.Text className='author'>{displayName}</Typography.Text>
				<Typography.Text className='date'>{createdAt}</Typography.Text>
			</div>
			<div>
				<Typography.Text className='content'>{text}</Typography.Text>
			</div>
		</WrapperStyled>
	)
}
export default Message
