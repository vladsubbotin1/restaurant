import './App.css'
import Main from './pages/Main.jsx'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Seoul from './pages/restaurants/Seoul'
import Cart from './pages/Cart'
import Dish from './pages/restaurants/Dish'
import ScrollToTop from './components/ScrollToTop'
import Delivery from './pages/Delivery'

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/seoul' element={<Seoul />} />
				<Route path='/seoul/dish' element={<Dish />} />
				<Route path='/delivery' element={<Delivery />} />
			</Routes>
		</Router>
	)
}

export default App
