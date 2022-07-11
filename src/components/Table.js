import React from "react"
import { Table as BootstrapTable } from "react-bootstrap"
import { MdDone, MdDeleteForever } from "react-icons/md";

const Table = ({ data = [], headers = [] }) => {
	return (
		<div>
			<BootstrapTable striped bordered hover size="md" className="mt-6">
				<thead>
					<tr>
						<th>No. #</th>
						<th>Title</th>
						<th>Completed</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map((task, ind) => (
							<tr key={task.id}>
								<td> {task.id} </td>
								<td> {task.title} </td>
								<td> {task.completed ? "Done" : "Pending"} </td>
								<td>
                                    <MdDone style={{ cursor: 'pointer', color: '#499f6e'}} className="mx-2"/>
                                    <MdDeleteForever style={{ cursor: 'pointer', color: '#d4474f'}} />
                                </td>
							</tr>
						))}
				</tbody>
			</BootstrapTable>
		</div>
	)
}

export default Table
