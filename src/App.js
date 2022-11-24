import React from "react"
import "./App.css"
import Header from "./components/frame/Header"
import Tasks from "./components/core/Tasks"
import { Routes, Route } from 'react-router-dom'
import Welcome from "./components/core/Welcome"

function App() {
	
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Welcome></Welcome>}></Route>
					<Route path="/tasks" element={<Tasks></Tasks>}></Route>
				</Routes>
			</main>
		</div>
	)
}

export default App
