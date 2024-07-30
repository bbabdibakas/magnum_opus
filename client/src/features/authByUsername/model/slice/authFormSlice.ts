import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthFormState } from '../types/AuthFormState'
import { authByUsername } from '../services/authByUsername'

const initialState: AuthFormState = {
	username: '',
	password: '',
	isLoading: false
}

export const authFormSlice = createSlice({
	name: 'authForm',
	initialState,
	reducers: {
		onSetUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
		onSetPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(authByUsername.pending, (state) => {
				state.isLoading = true
				state.errorMessage = undefined
			})
			.addCase(authByUsername.rejected, (state, action) => {
				state.isLoading = false
				state.errorMessage = action.payload as string
			})
			.addCase(authByUsername.fulfilled, (state) => {
				state.isLoading = false
				state.errorMessage = undefined
				state.username = ''
				state.password = ''
			})
	}
})

export const { actions: authFormActions } = authFormSlice
export const { reducer: authFormReducer } = authFormSlice