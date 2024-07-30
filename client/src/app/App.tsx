import { Route, Routes } from "react-router-dom"
import { MainPage } from "pages/MainPage"
import { ProfilePage } from "pages/ProfilePage"
import { Sidebar } from "widgets/Sidebar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { userActions } from "entities/User"

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.onInitUserData())
    }, [])

    return (
        <div className="app">
            <div className="wrapper">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}