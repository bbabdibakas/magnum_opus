import { Sidebar } from "widgets/Sidebar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { userActions } from "entities/User"
import { RouteProvider } from "./providers/RouteProvider"

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.onInitUserData())
    }, [])

    return (
        <div className="app">
            <div className="wrapper">
                <Sidebar />
                <RouteProvider />
            </div>
        </div>
    )
}