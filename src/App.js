import './App.css'
import Main from './pages/Main.jsx'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Seoul from './pages/restaurants/Seoul'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/seoul' element={<Seoul />} />
			</Routes>
		</Router>
	)
}

export default App
