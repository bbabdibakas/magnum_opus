import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { createReduxStore } from '../lib/store'
import { RootState } from '../lib/RootState'

interface StoreProviderProps {
    initialState?: RootState
    children: ReactNode
}

export const StoreProvider = (props: StoreProviderProps) => {

	const {
		initialState,
		children
	} =props

	const store = createReduxStore(initialState)
    
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}