import React, { useState, useEffect } from "react"
import { Navbar, Container } from "react-bootstrap"

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height,
	}
}

const Header = ({ title = "My To-do App" }) => {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	)

	const onButtonClick = () => {
		console.log("Clicked Button!")
	}

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return (
		<Navbar
			collapseOnSelect
			style={{ backgroundColor: "#0376fc" }}
			expand="lg"
		>
			<Container>
				{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
				<Navbar.Brand
					href="#home"
					style={{ color: "#ffffff", fontWeight: "bold" }}
				>
					{title}
				</Navbar.Brand>
			</Container>
		</Navbar>
	)
}

export default Header
