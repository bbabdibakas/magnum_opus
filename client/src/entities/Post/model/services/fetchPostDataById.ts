import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_DATA_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { Post } from '../types/PostState'

export const fetchPostDataById = createAsyncThunk<Post, string, { rejectValue: string }>(
    'post/fetchPostDataById',
    async (postId, thunkApi) => {
        const { rejectWithValue } = thunkApi

        try {
            const response = await axios.get<Post>(`http://localhost:8000/posts/${postId}`, {
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