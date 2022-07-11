import React from "react"
import { Form } from "react-bootstrap"
import { IoTrashOutline } from "react-icons/io5"
import DayJS from 'react-dayjs';

const Task = ({ task, onTaskChange, removeTask }) => {
	return (
		<div>
			<Form>
				<div className="task">
					<Form.Check>
						<Form.Check.Input
							type="checkbox"
							onChange={(e) => {
								onTaskChange(task, e.target.checked)
							}}
						/>
						<Form.Check.Label
							className={task.completed ? "task-completed" : ""}
						>
							<div style={{ display: "flex", justifyContent: 'start'}}>
								{task.title}
							</div>

							<div style={{ display: "flex", justifyContent: 'start'}}>
								<Form.Text>
									<DayJS format="MMMM DD, YYYY, ddd" >{ task.date }</DayJS>
								</Form.Text>
							</div>
						</Form.Check.Label>
					</Form.Check>
					{task.completed && (
						<IoTrashOutline
							onClick={() => {
								removeTask(task)
							}}
						/>
					)}
				</div>
			</Form>
		</div>
	)
}

export default Task
