import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'app/providers/StoreProvider'
import axios from 'axios'
import { Post } from 'entities/Post'
import { USER_DATA_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export const createPost = createAsyncThunk<Post, string, { rejectValue: string }>(
    'post/createPost',
    async (content, thunkApi) => {
        const { dispatch, rejectWithValue, getState } = thunkApi

        const state = getState() as RootState
        const profileId = state.user.userData.profileId

        const newPost = { content, profileId }

        try {
            const response = await axios.post<Post>('http://localhost:8000/posts', newPost, {
                headers: {
                    Authorization: localStorage.getItem(USER_DATA_LOCALSTORAGE_KEY)
                }
            })

            if (!response.data) {
                throw new Error('some error')
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('some error')
        }
    }
)