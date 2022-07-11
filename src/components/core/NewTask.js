import React from "react"
import { Form } from "react-bootstrap"

const NewTask = ({ task, handleOnChange, isSaving }) => {
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicCheckbox" >
					<Form.Label>Category</Form.Label>
					<Form.Select disabled={isSaving} value={task.category} onChange={handleOnChange} name="category" aria-label="Default select example">
						<option>Choose One</option>
						<option value="Personal">Personal</option>
						<option value="School">School</option>
						<option value="Work">Work</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Title</Form.Label>
					<Form.Control disabled={isSaving} value={task.title} onChange={handleOnChange} name="title" type="text" placeholder="Enter Task Title" />
				</Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDate">
					<Form.Label>Date</Form.Label>
					<Form.Control disabled={isSaving} value={task.date} onChange={handleOnChange} name="date" type="date" placeholder="Enter date" />
				</Form.Group>
			</Form>
		</div>
	)
}

export default NewTask
