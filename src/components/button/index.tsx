import clsx from 'clsx'
import style from './css.module.scss'

interface ButtonProps {
	children: any
	color?: 'white' | 'black'
}
const Button = (props: ButtonProps) => {
	return (
		<button
			className={clsx(style.button, {
				[style.black]: props.color === 'black',
			})}>
			{props.children}
		</button>
	)
}

export default Button
