import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
	status?: boolean
	name: string
	code: string
	icon: JSX.Element | null
	reference: string
}
const initialState: InitialState = {
	status: false,
	name: '',
	code: '',
	icon: <></>,
	reference: '',
}
export default createSlice({
	name: 'collectDetail',
	initialState,
	reducers: {
		showCollectDetail: (state, action: PayloadAction<InitialState>) => {
			state.status = true
			state.name = action.payload.name
			state.code = action.payload.code
			state.icon = action.payload.icon
			state.reference = action.payload.reference
		},
		closeCollectDetail: (state, action: PayloadAction<InitialState>) => {
			state.status = false
			state.name = action.payload.name
			state.code = action.payload.code
			state.icon = action.payload.icon
			state.reference = action.payload.reference
		},
	},
})
