import { useEffect } from 'react'
import clsx from 'clsx'
import 'prismjs/themes/prism-okaidia.css'
import Prism from 'prismjs'
import style from './css.module.scss'
import { useAppSelector, useAppDispatch } from 'hooks/hooks'
import Icons from 'assets/icons'
import slice from './store'
import Button from 'components/button'

const CollectDetail = () => {
	const dispatch = useAppDispatch()
	const state = useAppSelector((state) => state.collectDetail)
	useEffect(() => {
		Prism.highlightAll()
	})
	return (
		<>
			{state.status && (
				<div
					className={style.detail}
					onClick={(e) => dispatch(slice.actions.closeCollectDetail(''))}>
					<div className={style.wrapper} onClick={(e) => e.stopPropagation()}>
						<div className={style.head}>
							<span
								onClick={() => dispatch(slice.actions.closeCollectDetail(''))}>
								<Icons.XMark height={'20'} />
							</span>
						</div>
						<div className={clsx('container', style.content)}>
							<span className={style.button}>
								<Button>Copy</Button>
							</span>
							<div className={clsx(style.icon, 'col-4')}>{state.icon}</div>
							<div className={clsx(style.code, 'col-8')}>
								<pre>
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
