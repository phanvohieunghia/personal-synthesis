import { useEffect, useLayoutEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from 'components/header'
import HeaderMobile from 'components/header-mb'
import Popup from 'components/popup'
const Layout = () => {
	const [stateDevice, setStateDevice] = useState<boolean>(true)
	useLayoutEffect(() => {
		setStateDevice(window.innerWidth > 475)
	}, [])
	useEffect(() => {
		function handleStateDevice(e: any) {
			setStateDevice(e.target.innerWidth > 475)
		}
		window.addEventListener('resize', (e: any) => handleStateDevice(e))
		return window.removeEventListener('resize', (e: any) =>
			handleStateDevice(e)
		)
	}, [stateDevice])
	return (
		<>
			<Popup />
			{!stateDevice && <HeaderMobile />}
			{stateDevice && <Header />}
			<Outlet />
		</>
	)
}

export default Layout
