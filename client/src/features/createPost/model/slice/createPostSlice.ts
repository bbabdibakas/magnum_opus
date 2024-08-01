import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { createPost } from '../services/createPost'
import { CreatePostFormState } from '../types/CreatePostFormState'

const initialState: CreatePostFormState = {
	content: '',
	isLoading: false
}

export const createPostFormSlice = createSlice({
	name: 'createPostForm',
	initialState,
	reducers: {
		onSetContent: (state, action: PayloadAction<string>) => {
			state.content = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createPost.pending, (state) => {
				state.isLoading = true
				state.errorMessage = undefined
			})
			.addCase(createPost.rejected, (state, action) => {
				state.isLoading = false
				state.errorMessage = action.payload as string
			})
			.addCase(createPost.fulfilled, (state) => {
				state.isLoading = false
				state.errorMessage = undefined
				state.content = ''
			})
	}
})

export const { actions: createPostFormActions } = createPostFormSlice
export const { reducer: createPostFormReducer } = createPostFormSlice