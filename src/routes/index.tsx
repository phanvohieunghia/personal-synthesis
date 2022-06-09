import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from 'layout'

import LandingPage from 'components/landingpage'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<LandingPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
