import { configureStore } from '@reduxjs/toolkit'
import popupSlice from 'components/popup/store'
import collectDetailSlice from 'app/collects/detail/store'

const store = configureStore({
	reducer: {
		popup: popupSlice.reducer,
		collectDetail: collectDetailSlice.reducer,
	},
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
