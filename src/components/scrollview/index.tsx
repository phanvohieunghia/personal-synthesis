import { useEffect } from 'react'

interface PropsType {
	children: any
}
const ScrollView = (props: PropsType) => {
	const { children } = props
	const screenHeight = window.screen.height
	function HandleScrolling(e: WheelEvent) {
		if (e.deltaY > 0 && window.scrollY < screenHeight)
			window.scrollTo({ top: window.screen.height, behavior: 'smooth' })
		else if (e.deltaY < 0 && window.scrollY < screenHeight) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}
	window.addEventListener('wheel', (e) => HandleScrolling(e))
	useEffect(() => {
		return () => window.removeEventListener('wheel', (e) => HandleScrolling(e))
	})
	return <div>{children}</div>
}

export default ScrollView
