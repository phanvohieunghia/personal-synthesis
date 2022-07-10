import { useEffect, useRef } from 'react'

interface PropsType {
	children: any
}
const ScrollView = (props: PropsType) => {
	const { children } = props
	const scrollRef = useRef<HTMLDivElement>(null)
	const screenHeight = window.innerHeight
	function HandleScrolling(e: WheelEvent) {
		if (e.deltaY > 0 && window.scrollY < screenHeight) {
			e.preventDefault()
			window.scrollTo({ top: screenHeight, behavior: 'smooth' })
		} else if (e.deltaY < 0 && window.scrollY <= screenHeight) {
			e.preventDefault()
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}
	window.addEventListener('wheel', (e) => HandleScrolling(e), {
		passive: false,
	})
	useEffect(() => {
		return () => window.removeEventListener('wheel', (e) => HandleScrolling(e))
	})
	return <div ref={scrollRef}>{children}</div>
}

export default ScrollView
