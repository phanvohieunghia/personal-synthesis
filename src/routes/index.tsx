import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Layout from 'layout'
import BlankLayout from 'layout/blank'
import NotFoundPage from 'layout/notfound'

import LandingPage from 'app/landingpage'
import CollectsPage from 'app/collects'
import LoginDemoPage from 'app/login'

import LoginChatPage from 'app/chat'
import ChatRoomPage from 'app/chatRoom'

import AuthProvider from 'app/chat/context/authProvider'
import AppProvider from 'app/chat/context/appProvider'

import Modal from 'app/chat/modal'
const Router = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<AppProvider>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route path='/' element={<LandingPage />} />
							<Route path='collects' element={<CollectsPage />} />
						</Route>

						<Route path='/' element={<BlankLayout />}>
							<Route path='login-demo' element={<LoginDemoPage />} />
							<Route path='login' element={<LoginChatPage />} />
							<Route path='chat' element={<ChatRoomPage />} />
						</Route>
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
					<Modal />
				</AppProvider>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default Router
