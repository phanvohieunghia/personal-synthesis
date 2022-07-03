import clsx from 'clsx'
import { Link } from 'react-router-dom'

import style from './css.module.scss'
import data from 'assets/data/header.json'

const Header = () => {
	return (
		<header className={style.header}>
			<div className={clsx(style.wrapper, 'container')}>
				<div className={style.left}>PVHN</div>
				<div className='right'>
					{data.map((item: any, i) => (
						<Link to={item.path}>
							<span key={i}>{item.name}</span>
						</Link>
					))}
				</div>
			</div>
		</header>
	)
}

export default Header
