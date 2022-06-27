import { useSelector } from 'react-redux'
import style from './css.module.scss'

const DetailCollect = () => {
	const state = useSelector<any>((state) => state.collectDetail.status)
	return <>{state && <div className={style.detail}>hello</div>}</>
}

export default DetailCollect
