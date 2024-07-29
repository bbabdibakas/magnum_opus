import { useState } from "react"
import "./App.css"
import axios from "axios"

export const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = async () => {
        try {
            const result = await axios.post('http://localhost:8000/auth/login', { username, password })

            if (result.data) {
                setIsAuth(true)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="app">
            <div className="wrapper">
                <div className="sidebar">
                    sidebar
                </div>
                <div className="content">
                    <div className="auth">
                        <div className="input">
                            username:
                            <input value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="input">
                            password:
                            <input value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button onClick={onLogin}>
                            Login
                        </button>
                    </div>
                    {isAuth && 'Logged!'}
                </div>
            </div>
        </div>
    )
}