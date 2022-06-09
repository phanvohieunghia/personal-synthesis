import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from 'layout'

import LandingPage from 'components/landingpage'
import NotFoundPage from 'layout/notfound'
const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<LandingPage />} />
				</Route>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
