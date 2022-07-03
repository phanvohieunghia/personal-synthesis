import clsx from 'clsx'
import style from './css.module.scss'
import FacebookLogin from 'react-facebook-login'
import { GoogleLogin } from 'react-google-login'

const responseFacebook = (response: any) => {
	console.log(response)
}
const responseGoogle = (response: any) => {
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
			<GoogleLogin
				clientId='269244489322-ubfba8u5g3p991eu3ci87icdov6pfpqi.apps.googleusercontent.com'
				buttonText='Login'
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	)
}

export default BlankPage
