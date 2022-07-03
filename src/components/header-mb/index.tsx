import { useState } from 'react'

import style from './css.module.scss'
import Icons from 'assets/icons'
import clsx from 'clsx'
import data from 'assets/data/header.json'

const HeaderMobile = () => {
	const [sidebar, setSidebar] = useState<boolean>(false)
	function toggleSidebar() {
		setSidebar(!sidebar)
	}
	return (
		<div className={style.header}>
			<div className={style.title}>
				<span onClick={toggleSidebar}>
					<Icons.Bars height={'20px'} />
				</span>
			</div>
			<div
				className={clsx(style.sidebar, {
					[style.active]: sidebar,
				})}>
				<div className={style.closedBtn}>
					<span onClick={toggleSidebar}>
						<Icons.XMark height={'20px'} />
					</span>
				</div>
				{data.map((item: any, i) => (
					<div
						className={clsx(style.item, {
							[style.item1]: i === 0,
						})}
						key={i}>
						{item.name}
					</div>
				))}
			</div>
		</div>
	)
}

export default HeaderMobile
