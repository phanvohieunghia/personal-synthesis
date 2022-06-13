import clsx from 'clsx'

import style from './css.module.scss'

const Header = () => {
	return (
		<div className={style.header}>
			<div className={clsx(style.wrapper, 'container')}>
				<div className={style.left}>PVHN</div>
				<div className='right'>
					<span>Home</span>
					<span>Skill</span>
					<span>Project</span>
				</div>
			</div>
		</div>
	)
}

export default Header
