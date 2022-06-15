import style from './css.module.scss'

import Search from 'components/search'
const CollectsPage = () => {
	return (
		<div className={style.collect}>
			<div className='container'>
				<Search />
			</div>
		</div>
	)
}

export default CollectsPage
