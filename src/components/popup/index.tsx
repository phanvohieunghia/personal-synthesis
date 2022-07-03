import { useAppDispatch, useAppSelector } from 'hooks'
import { useEffect } from 'react'

import style from './css.module.scss'
import popupSlice from './store'

const PopupSlice = () => {
	const dispatch = useAppDispatch()
	const state = useAppSelector<any>((state) => state.popup.sooncoming)
	useEffect(() => {
		if (state) {
			const timeoutId = setTimeout(() => {
				dispatch(popupSlice.actions.togglePopup(false))
				return () => clearTimeout(timeoutId)
			}, 900)
		}
	}, [state, dispatch])
	return <>{state && <div className={style.popup}>Coming Soon!</div>}</>
}

export default PopupSlice
