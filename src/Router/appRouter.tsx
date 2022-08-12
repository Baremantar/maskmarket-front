import { MainPage } from 'pages/mainpage/mainpage'
import { NotFound } from 'pages/notfound/notfound'
import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/not_found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not_found" />} />
        </Routes>
    )
}
