import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserState } from '../types/UserState'
import { USER_DATA_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const initialState: UserState = {}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		onSetUserData: (state, action: PayloadAction<User>) => {
			state.userData = action.payload
			localStorage.setItem(USER_DATA_LOCALSTORAGE_KEY, JSON.stringify(action.payload))
		},
		onInitUserData: (state) => {
			const userData = localStorage.getItem(USER_DATA_LOCALSTORAGE_KEY)
			if (userData) {
				state.userData = JSON.parse(userData)
			}
		},
		onRemoveUserData: (state) => {
			state.userData = undefined
			localStorage.removeItem(USER_DATA_LOCALSTORAGE_KEY)
		},
	}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice