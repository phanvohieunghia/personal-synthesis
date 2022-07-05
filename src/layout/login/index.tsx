import clsx from 'clsx'

import style from './css.module.scss'

import { signInWithGoogle, signInWithFacebook } from './auth'
import Icons from 'assets/icons'
import { useState } from 'react'
const LoginPage = () => {
	const [user, setUser] = useState<any>(null)
	async function loginGoogle() {
		const result: any = await signInWithGoogle()
		console.log(result)
		setUser(result.user)
	}
	async function loginFacebook() {
		const result: any = await signInWithFacebook()
		console.log(result)
		setUser(result.user)
	}
	return (
		<div className={clsx(style.login, 'container')}>
			<div className={style.button}>
				<button onClick={loginGoogle} className={style.google}>
					<span>
						<Icons.Google2 color='#fff' />
					</span>
					<span>Sign up with Google</span>
				</button>
				<button onClick={loginFacebook} className={style.facebook}>
					<span>
						<Icons.Facebook2 color='#fff' />
					</span>
					<span>Sign up with Facebook</span>
				</button>
			</div>
			{true && (
				<div className={style.result}>
					<div className={style.name}>
						<span>Name: </span>
						<span>{user?.displayName}</span>
					</div>
					<div className={style.email}>
						<span>Email: </span>
						<span>{user?.email}</span>
					</div>
					<div className={style.photo}>
						<img src={user?.photoURL} alt='error png' />
					</div>
				</div>
			)}
		</div>
	)
}

export default LoginPage
