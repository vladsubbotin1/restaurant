import './App.css'
import Main from './pages/Main.jsx'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Seoul from './pages/restaurants/Seoul'
import Cart from './pages/Cart'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/seoul' element={<Seoul />} />
			</Routes>
		</Router>
	)
}

export default App
