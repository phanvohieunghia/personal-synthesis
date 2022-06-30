import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import 'prismjs/themes/prism-okaidia.css'
import Prism from 'prismjs'
import style from './css.module.scss'
import { useAppSelector, useAppDispatch } from 'hooks/hooks'
import Icons from 'assets/icons'
import slice from './store'
import Button from 'components/button'

const CollectDetail = () => {
	const mainRef = useRef<HTMLDivElement>(null)
	const headingRef = useRef<HTMLDivElement>(null)
	const dispatch = useAppDispatch()
	const state = useAppSelector((state) => state.collectDetail)
	const [heightCode, setHeightCode] = useState<string>('0')
	useEffect(() => {
		const mainHeight = mainRef.current?.getBoundingClientRect().height as number
		console.log(mainHeight)
		const headingHeight = headingRef.current?.getBoundingClientRect()
			.height as number
		console.log(headingHeight)
		setHeightCode(mainHeight - headingHeight - 30 + 'px')
	})

	useEffect(() => {
		Prism.highlightAll()
	})
	function handleCopy() {
		navigator.clipboard.writeText(state.value)
	}
	return (
		<>
			{state.status && (
				<div
					className={style.detail}
					onClick={() =>
						dispatch(
							slice.actions.closeCollectDetail({ value: '', icon: null })
						)
					}>
					<div
						className={style.wrapper}
						ref={mainRef}
						onClick={(e) => e.stopPropagation()}>
						<div className={style.head} ref={headingRef}>
							<span
								onClick={() =>
									dispatch(
										slice.actions.closeCollectDetail({ value: '', icon: null })
									)
								}>
								<Icons.XMark height={'20'} />
							</span>
						</div>
						<div className={clsx('container', style.content)}>
							<div className={clsx(style.icon, 'col-4 col-md-12')}>
								{state.icon}
							</div>
							<div
								className={clsx(style.code, 'col-8 col-md-12')}
								onClick={handleCopy}>
								<span className={style.button}>
									<Button>Copy</Button>
									<Button>Copied</Button>
								</span>
								<pre style={{ height: heightCode }}>
									<code className='language-markup'>{state.value}</code>
								</pre>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default CollectDetail
