import clsx from 'clsx'
import style from './css.module.scss'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

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
			{/* <FacebookLogin
				appId='420382206641287'
				autoLoad={true}
				fields='name,email,picture'
				onClick={handleFacebook}
				callback={responseFacebook}
			/> */}
			<GoogleLogin
				clientId={
					'330830489852-m2hsjojbrf1keb8985ni99p719ib35h9.apps.googleusercontent.com'
				}
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
				buttonText={'Log in with Google'}></GoogleLogin>
		</div>
	)
}

export default BlankPage
