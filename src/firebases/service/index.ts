import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from 'firebases/config'

export const addDocument = (collectionKey: any, data: any) => {
	addDoc(collection(db, collectionKey), {
		...data,
		createdAt: serverTimestamp(),
	})
}
