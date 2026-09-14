import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './auth/Register'
import Login from './auth/Login'
import LogOut from './auth/LogOut'

function App() {
  return (
    <div>
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </div>
  )
}

export default App