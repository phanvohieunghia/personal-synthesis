import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

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
const auth = getAuth(app)
connectAuthEmulator(auth, 'http://localhost:9099')

const db = getFirestore(app)
if (window.location.hostname === 'localhost') {
	connectFirestoreEmulator(db, 'localhost', 8080)
}

export { auth, db }
