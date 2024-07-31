import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileState } from '../types/ProfileState'
import { fetchProfileData } from '../services/fetchProfileData'

const initialState: ProfileState = {
	isLoading: false
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.isLoading = true
				state.errorMessage = undefined
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.errorMessage = action.payload as string
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false
				state.errorMessage = undefined
				state.profileData = action.payload
			})
	}
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice