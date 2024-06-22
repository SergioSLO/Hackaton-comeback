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
import Cart2 from "./Pages/Cart2.jsx";
import CrearItem from "./Pages/CrearItem.jsx";
import ItemDetails from "./Pages/ObtenerItem.jsx";
import CartBeta from "./Pages/CartBeta.jsx";
import EditarItem from "./Pages/EditarItem.jsx";
import CartBeta from "./Pages/CartBeta.jsx";

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/auth/login"/>} />
                <Route path="/auth/login" element={<Login/>} />
                <Route path="/auth/signup" element={<Signup/>} />
                <Route path="/home" element={<Dashboard/>} />
                <Route path="/cart" element={<CartBeta/>} />
                <Route path="/cart" element={<Cart2/>} />
                <Route path="/cartbeta" element={<CartBeta/>} />
                <Route path="/product/edit/:id" element={<EditarItem />} />
                <Route path="/create" element={<CrearItem/>} />
                <Route path="/product/:id" element={<ItemDetails />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App
