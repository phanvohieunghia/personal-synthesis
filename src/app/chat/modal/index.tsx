import { Form, Modal, Input } from 'antd'
import { AppContext } from 'app/chat/context/appProvider'
import { useContext } from 'react'

import { addDocument } from 'firebases/service'
import { AuthContext } from '../context/authProvider'

const Modals = () => {
	const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext)
	const user = useContext(AuthContext)
	const [form] = Form.useForm()
	const handleOk = () => {
		console.log(form.getFieldsValue())
		addDocument('rooms', { ...form.getFieldsValue(), members: [user.uid] })
		setIsAddRoomVisible(false)
	}
	const handleCancel = () => {
		setIsAddRoomVisible(false)
	}
	return (
		<Modal
			title='Create Room'
			visible={isAddRoomVisible}
			onOk={handleOk}
			onCancel={handleCancel}>
			<Form form={form} layout='vertical'>
				<Form.Item label='Room Name' name='name'>
					<Input placeholder='Input room name' />
				</Form.Item>
				<Form.Item label='Description' name='description'>
					<Input.TextArea placeholder='Input description' />
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default Modals
