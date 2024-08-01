import { Routes, Route } from "react-router-dom"
import { routeConfig } from "../lib/routeConfig"
import { Suspense } from "react"

const RouteProvider = () => {
    return (
        <div className="content">
            <Suspense fallback={'Loading...'}>
                <Routes>
                    {
                        Object.values(routeConfig).map(({ path, element }) => (
                            <Route
                                path={path}
                                key={path}
                                element={element}
                            />
                        ))
                    }
                </Routes>
            </Suspense>
        </div>
    )
}

export default RouteProvider