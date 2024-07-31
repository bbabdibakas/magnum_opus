import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Profile } from '../types/ProfileState'
import { USER_DATA_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export const fetchProfileData = createAsyncThunk<Profile, string, { rejectValue: string }>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const { rejectWithValue } = thunkApi

        try {
            const response = await axios.get<Profile>(`http://localhost:8000/profiles/${profileId}`, {
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