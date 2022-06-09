import { useState } from 'react'

import style from './css.module.scss'
import Icons from 'assets/icons'
import clsx from 'clsx'

const HeaderMobile = () => {
	const [sidebar, setSidebar] = useState<boolean>(false)
	function toggleSidebar() {
		setSidebar(!sidebar)
	}
	return (
		<div className={style.header}>
			<div className={style.title}>
				<a onClick={toggleSidebar}>
					<Icons.Bars height={'20px'} />
				</a>
			</div>
			<div
				className={clsx(style.sidebar, {
					[style.active]: sidebar,
				})}>
				<div className={style.closedBtn}>
					<a onClick={toggleSidebar}>
						<Icons.XMark height={'20px'} />
					</a>
				</div>
				<div className={clsx(style.item, style.item1)}>Home</div>
				<div className={style.item}>Project</div>
			</div>
		</div>
	)
}

export default HeaderMobile
