import React from "react"
import { Card as BootstrapCard } from "react-bootstrap"

const Card = ({
	header,
	content,
	title,
	subtitle,
	variant,
	cardClass,
	style
}) => {
	return (
		<BootstrapCard
			body
			style={style}
			bg={variant}
			className={cardClass}
		>
			{header && <BootstrapCard.Header>{header}</BootstrapCard.Header>}
			{title && <BootstrapCard.Title>{title}</BootstrapCard.Title>}
			{subtitle && <BootstrapCard.Subtitle>{subtitle}</BootstrapCard.Subtitle>}
			{content && <BootstrapCard.Body>{content}</BootstrapCard.Body>}
		</BootstrapCard>
	)
}

export default Card
