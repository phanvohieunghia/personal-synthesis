import { useDispatch } from 'react-redux'
import clsx from 'clsx'

import style from './css.module.scss'
import Icons, { IconList } from 'assets/icons'
import Search from 'components/search'
import PopupButton from 'components/popup/button'
import collectDetailSlice from './detail/store'
import { PrettyFormat } from 'components/common/pretty-format'

const CollectsPage = () => {
	const dispatch = useDispatch()
	function handleItem(text: string, icon: JSX.Element) {
		dispatch(
			collectDetailSlice.actions.showCollectDetail({ value: text, icon })
		)
	}
	return (
		<div className={style.collect}>
			<div className={style.head}>
				<div className='container'>
					<div className={style.pb20}>
						<Search />
					</div>
					<div className={clsx(style.box, style.pb20)}>
						<div className={style.type}>
							<div className={style.item}>
								<PopupButton />
								All
							</div>
							<div className={style.item}>
								<PopupButton />
								Icon
							</div>
							<div className={style.item}>
								<PopupButton />
								Something
							</div>
						</div>
						<div className={style.view}>
							<span className={clsx(style.icon)}>
								<PopupButton />
								<Icons.GridLarge height={'20'} />
							</span>
							<span className={style.icon}>
								<PopupButton />
								<Icons.GridSmall height={'20'} />
							</span>
							<span className={style.icon}>
								<PopupButton />
								<Icons.List height={'20'} />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className={style.main}>
				<div className={clsx(style.list, 'container')}>
					{IconList.map((item, i) => {
						const formatted = PrettyFormat(<item.icon />)
						return (
							<div className={clsx(style.wrapper, 'col-2')} key={i}>
								<div
									className={style.item}
									onClick={() => handleItem(formatted, <item.icon />)}>
									<item.icon height={'40'} />
									<div className={style.name}>{item.name}</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default CollectsPage
