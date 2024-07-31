import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { authFormReducer } from 'features/authByUsername'
import { RootState } from './RootState'
import { userReducer } from 'entities/User'
import { profileReducer } from 'entities/Profile'

export const createReduxStore = (initialState?: RootState) => {
    const rootReducer: ReducersMapObject<RootState> = {
        user: userReducer,
        authForm: authFormReducer,
        profile: profileReducer
    }

    const store = configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    return store
}
