import { getUserData } from 'entities/User'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { routePath } from '../lib/routeConfig'


export const RequireAuth = ({ children }: { children: JSX.Element }) => {

	const auth = useSelector(getUserData)
	const location = useLocation()

	if (!auth) {
		return <Navigate to={routePath.main} state={{ from: location }} replace />
	}

	return children
}