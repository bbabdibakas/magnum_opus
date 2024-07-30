import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface User {
    id: string
    username: string
}

interface AuthByUsernameProps {
    username: string
    password: string
}

export const authByUsername = createAsyncThunk<User, AuthByUsernameProps, { rejectValue: string }>(
    'auth/authByUsername',
    async (authData, thunkApi) => {
        const { rejectWithValue } = thunkApi

        try {
            const response = await axios.post<User>('http://localhost:8000/auth/login', authData)

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