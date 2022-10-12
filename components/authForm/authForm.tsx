import { useState } from "react"
import Login from "./views/login/login"
import Register from "./views/register/register.styles"

const AuthForm = () => {
    const [view, setView] = useState<'login' | 'register'>('login')

    return view === 'login' ? <Login changeView={setView} /> : <Register />
}

export default AuthForm