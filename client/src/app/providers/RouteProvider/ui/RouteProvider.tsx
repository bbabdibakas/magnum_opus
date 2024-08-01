import { Routes, Route } from "react-router-dom"
import { routeConfig } from "../lib/routeConfig"

const RouteProvider = () => {
    return (
        <div className="content">
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
        </div>
    )
}

export default RouteProvider