import style from './css.module.scss'

import Search from 'components/search'
import clsx from 'clsx'
import Icons from 'assets/icons'
import PopupButton from 'components/popup/button'

const CollectsPage = () => {
	return (
		<div className={style.collect}>
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
	)
}

export default CollectsPage
