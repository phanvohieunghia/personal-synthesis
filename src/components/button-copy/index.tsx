import clsx from 'clsx'
import style from './css.module.scss'

const ButtonCopy = () => {
	return (
		<button className={style.button}>
			<span>Copy!</span>
			<span>Copied!</span>
		</button>
	)
}

export default ButtonCopy
