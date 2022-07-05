import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from './config'

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
	return signInWithPopup(auth, provider)
		.then((result) => {
			return result
		})
		.catch((error) => {
			console.log(error)
		})
}
