import clsx from 'clsx'

import style from './css.module.scss'

import { signInWithGoogle, signInWithFacebook, signInWithGithub } from './auth'
const BlankPage = () => {
	return (
		<div className={clsx(style.blank, 'container')}>
			<button onClick={signInWithGoogle}>Sign up with Google</button>
			<button onClick={signInWithFacebook}>Sign up with Facebook</button>
			<button onClick={signInWithGithub}>Sign up with Github</button>
		</div>
	)
}

export default BlankPage
