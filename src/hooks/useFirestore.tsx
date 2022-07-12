import {
	collection,
	onSnapshot,
	orderBy,
	query,
	where,
	WhereFilterOp,
} from 'firebase/firestore'
import { db } from 'firebases/config'
import { useEffect, useState } from 'react'

export interface IRoomCondition {
	fieldName: string
	operator: WhereFilterOp
	compareValue: string
}

const useFirestore = (collectionKey: string, condition: IRoomCondition) => {
	const [documents, setDocuments] = useState<any>([])
	useEffect(() => {
		const collectionRef = collection(db, collectionKey)
		let q
		if (condition) {
			if (!condition.compareValue || !condition.compareValue.length) {
				return
			}
			q = query(
				collectionRef,
				orderBy('createdAt'),
				where(condition.fieldName, condition.operator, condition.compareValue)
			)
		} else {
			q = query(collectionRef, orderBy('createdAt'))
		}
		const unsubscribe = onSnapshot(q, (snapshot) => {
			const documents = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}))
			setDocuments(documents)
		})
		return unsubscribe
	}, [collectionKey, condition])
	return documents
}

export default useFirestore
