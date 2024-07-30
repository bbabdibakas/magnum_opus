import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'

interface AuthByUsernameProps {
    username: string
    password: string
}

export const authByUsername = createAsyncThunk<User, AuthByUsernameProps, { rejectValue: string }>(
    'auth/authByUsername',
    async (authData, thunkApi) => {
        const { dispatch, rejectWithValue } = thunkApi

        try {
            const response = await axios.post<User>('http://localhost:8000/auth/login', authData)

            if (!response.data) {
                throw new Error('some error')
            }

            dispatch(userActions.onSetUserData(response.data))

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('some error')
        }
    }
)