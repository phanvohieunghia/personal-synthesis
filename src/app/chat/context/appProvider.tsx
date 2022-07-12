import { useContext, useMemo, createContext, useState, ReactNode } from 'react'

import useFirestore, { IRoomCondition } from 'hooks/useFirestore'
import { AuthContext } from './authProvider'

export const AppContext = createContext<any>(null)

const AppProvider = ({ children }: { children: ReactNode }) => {
	const [isAddRoomVisible, setIsAddRoomVisible] = useState<boolean>(false)
	const data = useContext(AuthContext)
	const roomsCondition = useMemo(() => {
		return {
			fieldName: 'members',
			operator: 'array-contains',
			compareValue: data.uid,
		} as IRoomCondition
	}, [data.uid])
	const rooms = useFirestore('rooms', roomsCondition)
	return (
		<AppContext.Provider
			value={{ rooms, isAddRoomVisible, setIsAddRoomVisible }}>
			{children}
		</AppContext.Provider>
	)
}

export default AppProvider
