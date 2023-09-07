import { Routes, Route, Navigate } from "react-router-dom"
import { AuthRotes } from "../auth/routes/AuthRotes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui"
import { useCheckAuth } from "../hooks/useCheckAuth"


export const AppRouter = () => {
    const { status } = useCheckAuth();
    if (status === 'checking') {
        return <CheckingAuth />
    }
    return (
        <Routes>
            {
                (status === 'authenticaded')
                    ? <Route path="/*" element={<JournalRoutes />} />
                    : <Route path="/auth/*" element={<AuthRotes />} />
            }
            {/* Login */}
            <Route path="/*" element={<Navigate to={'/auth/login'} />} />
            {/* JournalApp */}

        </Routes>
    )
}
