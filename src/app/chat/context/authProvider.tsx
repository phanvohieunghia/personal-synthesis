import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spin } from 'antd'

import { auth } from 'firebases/config'

interface IUserInfo {
	displayName: string | null
	email: string | null
	uid: string | null
	photoURL: string | null
}
export const AuthContext = createContext<IUserInfo>({
	displayName: '',
	email: '',
	uid: '',
	photoURL: '',
})

const AuthProvider = ({ children }: { children: any }) => {
	const [user, setUser] = useState<IUserInfo>({
		displayName: '',
		email: '',
		uid: '',
		photoURL: '',
	})
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const navigate = useNavigate()
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { displayName, email, uid, photoURL } = user
				setUser({
					displayName,
					email,
					uid,
					photoURL,
				})
				setIsLoading(false)
				navigate('/chat')
				return
			}
			setIsLoading(false)
			navigate('/login')
		})
		return () => unsubscribe()
	}, [navigate])
	return (
		<AuthContext.Provider value={user}>
			{isLoading ? <Spin /> : children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
