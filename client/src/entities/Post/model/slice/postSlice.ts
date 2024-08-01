import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post, PostState } from '../types/PostState'
import { fetchPostDataById } from '../services/fetchPostDataById'

const initialState: PostState = {
	isLoading: false
}

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPostDataById.pending, (state) => {
				state.isLoading = true
				state.errorMessage = undefined
			})
			.addCase(fetchPostDataById.rejected, (state, action) => {
				state.isLoading = false
				state.errorMessage = action.payload as string
			})
			.addCase(fetchPostDataById.fulfilled, (state, action: PayloadAction<Post>) => {
				state.isLoading = false
				state.errorMessage = undefined
				state.postData = action.payload
			})
	}
})

export const { actions: postActions } = postSlice
export const { reducer: postReducer } = postSlice