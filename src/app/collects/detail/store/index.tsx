import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
	status?: boolean
	value: string
	icon: JSX.Element | null
}
const initialState: InitialState = {
	status: false,
	value: '',
	icon: null,
}
export default createSlice({
	name: 'collectDetail',
	initialState,
	reducers: {
		showCollectDetail: (state, action: PayloadAction<InitialState>) => {
			state.status = true
			state.value = action.payload.value
			state.icon = action.payload.icon
		},
		closeCollectDetail: (state, action: PayloadAction<string>) => {
			state.status = false
			state.value = action.payload
		},
	},
})
