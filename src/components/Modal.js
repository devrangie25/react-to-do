import React from "react"
import { Modal as BootstrapModal, Button, Spinner } from "react-bootstrap"

const Modal = ({ show, setShow, modal, centered = true, onClick, isSaving}) => {

	const handleClose = () => setShow(false)

	return (
		<div>
			<BootstrapModal centered={centered} show={show} onHide={handleClose}>
				<BootstrapModal.Header closeButton={!isSaving}>
					<BootstrapModal.Title>
						{ modal.title }
					</BootstrapModal.Title>
				</BootstrapModal.Header>
				<BootstrapModal.Body>
					{ modal.body }
				</BootstrapModal.Body>
				<BootstrapModal.Footer>
					<Button variant="secondary" onClick={handleClose} disabled={isSaving}>
                        { modal.closeButtonText }
					</Button>
					<Button disabled={isSaving} variant="primary" onClick={onClick}>
						{
							isSaving && <Spinner animation="border" size="sm" />
						}{" "}
						{ isSaving ? 'Saving...' : modal.saveButtonText }
					</Button>
				</BootstrapModal.Footer>
			</BootstrapModal>
		</div>
	)
}

export default Modal
