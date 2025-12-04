// import React from 'react'
import {  Routes, Route, BrowserRouter , Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
        </BrowserRouter>
  )
}

export default App
