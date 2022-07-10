import { Row, Col, Typography, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import {
	FacebookAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
} from 'firebase/auth'

import './css.scss'
import { auth } from 'firebases/config'

const { Title } = Typography

const fbProivder = new FacebookAuthProvider()

const Chat = () => {
	const navigate = useNavigate()
	const handleFacebookLogin = () => {
		signInWithPopup(auth, fbProivder)
	}
	onAuthStateChanged(auth, (user) => {
		console.log({ user })
		if (user) {
			navigate('chat', { replace: true })
		}
	})
	return (
		<div>
			<Row justify='center' style={{ height: 800 }}>
				<Col span={8}>
					<Title style={{ textAlign: 'center' }} level={3}>
						Fun Chat
					</Title>
					<Button
						style={{
							width: '100%',
							marginBottom: 5,
							fontSize: '1.6rem',
						}}>
						Log in with Google
					</Button>

					<Button
						onClick={handleFacebookLogin}
						style={{
							width: '100%',
							marginBottom: 5,
							fontSize: '1.6rem',
						}}>
						Log in with Facebook
					</Button>
				</Col>
			</Row>
			Hello
		</div>
	)
}

export default Chat
