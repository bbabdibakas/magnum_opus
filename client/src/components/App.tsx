import "./App.css"
import { Link, Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import ProfilePage from "../pages/ProfilePage"

export const App = () => {
    return (
        <div className="app">
            <div className="wrapper">
                <div className="sidebar">
                    <Link to="/">Main</Link>
                    <Link to="/profile">Profile</Link>
                </div>
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