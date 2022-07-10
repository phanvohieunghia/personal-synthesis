import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBxDMwyOGStgYXnTZ9S5YvRw0wq6yCPd8M',
	authDomain: 'phanvohieunghia-1111.firebaseapp.com',
	projectId: 'phanvohieunghia-1111',
	storageBucket: 'phanvohieunghia-1111.appspot.com',
	messagingSenderId: '1027433560824',
	appId: '1:1027433560824:web:0a2d8064e6a04740ea990d',
	measurementId: 'G-FP4ZGTQN2T',
}
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
