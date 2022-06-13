import { configureStore } from '@reduxjs/toolkit'
import popupSlice from 'components/popup/store'

const store = configureStore({
	reducer: {
		popup: popupSlice.reducer,
	},
})
export default store
