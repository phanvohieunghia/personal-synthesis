import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { auth } from 'firebases/config'

const provider = new FacebookAuthProvider()

export const signInWithFacebook = () => {
	return signInWithPopup(auth, provider)
		.then((result) => {
			return result
		})
		.catch((error) => {
			console.log(error)
		})
}
