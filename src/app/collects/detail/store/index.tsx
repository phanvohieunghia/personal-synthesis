import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
	status?: boolean
	value: string
	icon: JSX.Element | null
	reference: string
}
const initialState: InitialState = {
	status: false,
	value: '',
	icon: <></>,
	reference: '',
}
export default createSlice({
	name: 'collectDetail',
	initialState,
	reducers: {
		showCollectDetail: (state, action: PayloadAction<InitialState>) => {
			state.status = true
			state.value = action.payload.value
			state.icon = action.payload.icon
			state.reference = action.payload.reference
		},
		closeCollectDetail: (state, action: PayloadAction<InitialState>) => {
			state.status = false
			state.value = action.payload.value
			state.icon = null
		},
	},
})
