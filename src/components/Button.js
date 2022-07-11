import React from "react"
import { Button as BootstrapButton } from "react-bootstrap"

const Button = ({
	title = "Add",
	color = "primary",
	onClick = () => {
		console.log("Default action")
	},
	icon,
	buttonClass,
	buttonSize = "md",
	buttonStyle
}) => {
	return (
		<BootstrapButton
			onClick={onClick}
			variant={color}
			className={buttonClass}
			size={buttonSize}
			style={buttonStyle}
		>
			{icon && icon}
			{title}
		</BootstrapButton>
	)
}

export default Button
