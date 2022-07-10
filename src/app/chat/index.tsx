import {
	FacebookAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	getAdditionalUserInfo,
} from 'firebase/auth'
import { Row, Col, Typography, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
// import { doc, setDoc } from 'firebase/firestore'

import './css.scss'
import { auth } from 'firebases/config'
import { addDocument } from 'firebases/service'

const fbProivder = new FacebookAuthProvider()

const Chat = () => {
	const navigate = useNavigate()
	const handleFacebookLogin = () => {
		signInWithPopup(auth, fbProivder).then((result: any) => {
			if (getAdditionalUserInfo(result)?.isNewUser) {
				addDocument('users', {
					displayName: result.user.displayName,
					email: result.user.email,
					photoURL: result.user.photoURL,
					uid: result.user.displayName,
					providerId: result.providerId,
				})
			}
		})
	}
	onAuthStateChanged(auth, (user) => {
		if (user) {
			navigate('chat', { replace: true })
		}
	})
	return (
		<div>
			<Row justify='center' style={{ height: 800 }}>
				<Col span={8}>
					<Typography.Title style={{ textAlign: 'center' }} level={3}>
						Fun Chat
					</Typography.Title>
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
