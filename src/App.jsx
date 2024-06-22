import { useState } from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate } from 'react-router-dom'
import { Login } from './Pages/Login.jsx'

import {Navbar} from "./layout/Navbar.jsx";
import {Signup} from "./Pages/Signup.jsx";
import {NotFound} from "./Pages/NotFound.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/auth/login"/>} />
                <Route path="/auth/login" element={<Login/>} />
                <Route path="/auth/signup" element={<Signup/>} />
                <Route path="/home" element={<Dashboard/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App
