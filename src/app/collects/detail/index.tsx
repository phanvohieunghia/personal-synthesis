import { useEffect, useRef } from 'react'
import clsx from 'clsx'
import 'prismjs/themes/prism-okaidia.css'
import Prism from 'prismjs'
import style from './css.module.scss'
import { useAppSelector, useAppDispatch } from 'hooks/hooks'
import Icons from 'assets/icons'
import slice from './store'
import CopyButton from 'components/button-copy'

const CollectDetail = () => {
	const copyButtonRef = useRef<HTMLButtonElement>(null)
	const dispatch = useAppDispatch()
	const state = useAppSelector((state) => state.collectDetail)
	useEffect(() => {
		Prism.highlightAll()
	}, [state.status])
	function handleCopy() {
		navigator.clipboard.writeText(state.value)
		copyButtonRef.current?.click()
	}
	return (
		<>
			{state.status && (
				<div
					className={style.detail}
					onClick={() =>
						dispatch(
							slice.actions.closeCollectDetail({
								value: '',
								icon: null,
								reference: '',
							})
						)
					}>
					<div className={style.wrapper} onClick={(e) => e.stopPropagation()}>
						<div className={style.head}>
							<a href={state.reference}>
								<Icons.Link height={'20'} />
							</a>
							<span
								onClick={() =>
									dispatch(
										slice.actions.closeCollectDetail({
											value: '',
											icon: null,
											reference: '',
										})
									)
								}>
								<Icons.XMark height={'20'} />
							</span>
						</div>
						<div className={clsx('container', style.content)}>
							<div className={clsx(style.icon, 'col-3 col-md-12')}>
								{state.icon}
							</div>
							<div
								className={clsx(style.code, 'col-9 col-md-12')}
								onClick={handleCopy}>
								<span className={style.button}>
									<CopyButton ref={copyButtonRef} />
								</span>
								<pre
									style={{
										maxHeight: window.innerHeight * 0.8 - 45 - 30,
									}}>
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
