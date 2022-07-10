import { Col, Row } from 'antd'

import Sidebar from './sidebar'
import Main from './main'

const ChatRoom = () => {
	return (
		<>
			<Row>
				<Col span={6}>
					<Sidebar />
				</Col>
				<Col span={18}>
					<Main />
				</Col>
			</Row>
		</>
	)
}

export default ChatRoom
