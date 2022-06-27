import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
	name: 'collectDetail',
	initialState: {
		status: false,
		value: '',
	},
	reducers: {
		showCollectDetail: (state, action) => {
			state.status = true
			state.value = action.payload
		},
		closeCollectDetail: (state, action) => {
			state.status = false
			state.value = ''
		},
	},
})
