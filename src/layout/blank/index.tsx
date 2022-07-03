import clsx from 'clsx'
import style from './css.module.scss'
import FacebookLogin from 'react-facebook-login'

const responseFacebook = (response: any) => {
	console.log(response)
}

const BlankPage = () => {
	function handleFacebook() {
		console.log('click')
	}
	return (
		<div className={clsx(style.blank, 'container')}>
			<button>Login by Facebook</button>
			<FacebookLogin
				appId='420382206641287'
				autoLoad={true}
				fields='name,email,picture'
				onClick={handleFacebook}
				callback={responseFacebook}
			/>
		</div>
	)
}

export default BlankPage
