import { Landing } from 'pages/landing'
import { Routes, Route } from 'react-router-dom'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    )
}
