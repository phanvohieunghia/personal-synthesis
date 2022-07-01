import { forwardRef } from 'react'
import { useState, useLayoutEffect, memo } from 'react'

import style from './css.module.scss'
import Icons from 'assets/icons'

const ButtonCopy = (props: any, ref: any) => {
	const [state, setState] = useState<number>(0)
	useLayoutEffect(() => {
		if (state === 1) {
			const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
				setState((pre) => pre + 1)
				clearTimeout(timeoutId)
			}, 300)
		} else if (state === 2) {
			const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
				setState((pre) => pre + 1)
				clearTimeout(timeoutId)
			}, 2000)
		} else if (state > 2) {
			setState(0)
		}
		return
	}, [state])
	return (
		<button
			className={style.button}
			onClick={() => setState((pre) => pre + 1)}
			ref={ref}>
			{state === 0 && <Icons.Copy />}
			{state === 1 && <Icons.Loading />}
			{state === 2 && <Icons.Check />}
		</button>
	)
}

export default memo(forwardRef(ButtonCopy))
