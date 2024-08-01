import { Routes, Route } from "react-router-dom"
import { AppRouterProps, routeConfig } from "../lib/routeConfig"
import { Suspense } from "react"
import { RequireAuth } from "./RequireAuth"

const RouteProvider = () => {
    const renderWithWrapper = (route: AppRouterProps) => {
		const element = (
			<Suspense fallback={'Loading..'}>
				<div className="content">
					{route.element}
				</div>
			</Suspense>
		)

		return (
			<Route
				path={route.path}
				key={route.path}
				element={route.isRequiredAuth ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		)
	}

    return (
		<Routes>
			{
				Object.values(routeConfig).map(renderWithWrapper)
			}
		</Routes>
	)
}

export default RouteProvider