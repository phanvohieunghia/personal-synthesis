import { signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import { auth } from './config'
const provider = new GithubAuthProvider()

export const signInWithGithub = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const credential: any = GithubAuthProvider.credentialFromResult(result)
			const token = credential.accessToken
			console.log(token)
			const user = result.user
			console.log(user)
		})
		.catch((error) => {
			console.log(error)
			// Handle Errors here.
			const errorCode = error.code
			const errorMessage = error.message
			// The email of the user's account used.
			const email = error.customData.email
			// The AuthCredential type that was used.
			const credential = GithubAuthProvider.credentialFromError(error)
			// ...
		})
}
