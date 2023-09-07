import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

export const AuthRotes = () => {
    return (
        <Routes>
            <Route path='/Journal-App/login' element={<LoginPage />} />
            <Route path='/Journal-App/register' element={<RegisterPage />} />
            <Route path='/*' element={<Navigate to={'/Journal-App/auth/login'} />} />
        </Routes>
    )
}
