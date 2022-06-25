import clsx from 'clsx'
import style from './css.module.scss'

interface ButtonProps {
	children: any
	color?: 'white' | 'black'
	path?: string
}
const Button = (props: ButtonProps) => {
	return (
		<button
			className={clsx(style.button, {
				[style.black]: props.color === 'black',
			})}>
			<a href={props.path}>{props.children}</a>
		</button>
	)
}

export default Button
