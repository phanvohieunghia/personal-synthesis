import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from './config'

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			console.log(result)
		})
		.catch((error) => {
			console.log(error)
		})
}
