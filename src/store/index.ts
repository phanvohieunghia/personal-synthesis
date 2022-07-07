import { configureStore } from '@reduxjs/toolkit'
import popupSlice from 'components/popup/store'
import collectDetailSlice from 'app/collects/detail/store'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { getDefaultMiddleware } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		popup: popupSlice.reducer,
		collectDetail: collectDetailSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: true,
				ignoreState: true,
			},
		}),
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
