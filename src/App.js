import './App.css'
import Main from './pages/Main.jsx'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Seoul from './pages/restaurants/Seoul'
import Cart from './pages/Cart'
import Dish from './pages/restaurants/Dish'
import ScrollToTop from './components/ScrollToTop'

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/seoul' element={<Seoul />} />
				<Route path='/seoul/dish' element={<Dish />} />
			</Routes>
		</Router>
	)
}

export default App
