import { useEffect, useRef, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'

import style from './css.module.scss'
import popupSlice from '../store'

const Button = () => {
	const mainRef = useRef<any>(null)
	const dispatch = useDispatch()
	const handlePopup = (e: MouseEvent) => {
		dispatch(popupSlice.actions.togglePopup(true))
		e.stopPropagation()
		e.preventDefault()
	}
	useEffect(() => {
		mainRef.current.parentElement.style.position = 'relative'
	}, [])
	return (
		<div className={style.button} onClick={handlePopup} ref={mainRef}></div>
	)
}

export default Button
