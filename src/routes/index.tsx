import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from 'layout'
import BlankLayout from 'layout/blank'

import LandingPage from 'app/landingpage'
import CollectsPage from 'app/collects'

import NotFoundPage from 'layout/notfound'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<LandingPage />} />
					<Route path='collects' element={<CollectsPage />} />
				</Route>
				<Route path='/blank' element={<BlankLayout />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
