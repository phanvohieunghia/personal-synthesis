import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { auth } from './config'

const provider = new FacebookAuthProvider()

export const signInWithFacebook = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			console.log(result)
		})
		.catch((error) => {
			console.log(error)
		})
}
