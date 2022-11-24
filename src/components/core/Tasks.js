import React, { useState, useEffect, useCallback } from "react"
import Task from "./Task"
import TasksData from "../../utility/tasks-data"
import Categories from "../../utility/tasks-categories"
import Button from "../Button"
import Modal from "../Modal"
import NewTask from "./NewTask"
import { MdAdd } from "react-icons/md"
import Card from "../Card"
import Select from "../Select"
import CheckBox from "../CheckBox"
// import { useParams } from "react-router-dom";

// Custom hook to fetch data from API
// import useFetch from "../../custom-hooks/useFetch"

const Tasks = () => {

	// const { category } = useParams();
	const [tasks, setTasks] = useState(TasksData)
	const [deletingTask, setDeletingTask] = useState(null)
	const [tasksToDelete, setTasksToDelete] = useState([])
	const [showTaskForm, setShowTaskForm] = useState(false)
	const [newTask, setNewTask] = useState({ title: '', date: '', category: '' })
	const [isSaving, setIsSaving] = useState(false)
	const [categories, setCategories] = useState(Categories)
	const [category, setCategory] = useState('')
	const [selectAll, setSelectAll] = useState(false)

	const selectedAllTasks = useCallback(() => {
		
	}, [selectAll])

	const checkTask = (task, value) => {
		setDeletingTask({ ...task, checked: value })

		const newTasks = tasks.map((elemTask) => {
			if (task.title === elemTask.title) {
				elemTask.completed = value
			}
			return elemTask
		})

		setTasks(newTasks)
	}

	const removeTask = (task) => {
		const newTasks = tasks.filter((elemTask) => task.id !== elemTask.id)
		const remaingTasksToDelete = tasksToDelete.filter(
			(elemTask) => task.id !== elemTask.id
		)
		setTasksToDelete(remaingTasksToDelete)
		setTasks(newTasks)
	}

	const bulkTaskDelete = () => {
		const nonCompletedTasks = tasks.filter(
			(elemTask) => !elemTask.completed
		)
		setTasks(nonCompletedTasks)
		setTasksToDelete([])
	}

	const handleOnChange = (e) => {
		const { name, value } = e.target
		setNewTask({ ...newTask, [name]: value })
	}

	const modalTaskFormBody = () => {
		return (
			<div>
				<NewTask task={newTask} handleOnChange={handleOnChange} isSaving={isSaving} />
			</div>
		)
	}


	const saveNewTaskWithDelay = (delay) => {
		return new Promise(resolve => setTimeout(() => {
			resolve([...tasks, { ...newTask, completed: false, id: tasks.length + 1 }])
		}, delay)
		)
	}

	const handleSaveTask = async () => {
		setIsSaving(true)
		const newTasks = await saveNewTaskWithDelay(1500)
		setTasks(newTasks)
		setShowTaskForm(false)
		setIsSaving(false)
		setNewTask({ title: '', date: '', category: '' })
	}

	const showTaskFormModal = () => {
		if (tasksToDelete.length) {
			console.log('tasksToDelete', tasksToDelete.length)
		}
		setShowTaskForm(true)
	}

	const addTaskToTempArr = () => {
		if (deletingTask !== null && deletingTask.checked) {
			setTasksToDelete([...tasksToDelete, deletingTask])
		}

		if (deletingTask !== null && !deletingTask.checked) {
			const removeTaskToDelete = tasksToDelete.filter(
				(elemTask) => elemTask.id !== deletingTask.id
			)
			setTasksToDelete(removeTaskToDelete)
		}
	}

	useEffect(() => {
		addTaskToTempArr()
		console.log('deletingTask', deletingTask);
	}, [deletingTask])

	// if (loading) return <div>Loading...</div>;
	// if (error) return <div>Error: {error.message ? error.message : 'Something went wrong'}</div>;

	return (
		<div>
			<Modal
				show={showTaskForm}
				setShow={setShowTaskForm}
				onClick={handleSaveTask}
				modal={{
					title: "New Task",
					saveButtonText: "Save Task",
					closeButtonText: "Cancel",
					body: modalTaskFormBody()
				}}
				isSaving={isSaving}
			/>
			<div
				style={{
					margin: "10px 10px 0px 10px",
					backgroundColor: "#499f6e",
					borderRadius: "3px",
				}}
			>
				<Select options={categories} setCategory={setCategory}/>
			</div>
			{/* <div
				className="taskCategoryTitle"
				style={{
					padding: "5px",
					margin: "10px 10px 0px 10px",
					backgroundColor: "#499f6e",
					borderRadius: "3px",
				}}
			>
				<div
					style={{
						padding: "2px",
						color: "#ffffff",
						fontWeight: "bold",
					}}
				>
					Personal
				</div>
				<div style={{ padding: "2px" }}>
					<MdModeEditOutline style={{ color: "#ffffff" }} />
				</div> 
			</div> */}
			{tasksToDelete.length > 0 && (
				<div style={{ padding: "10px 10px 0px 10px" }}>
					<Button
						onClick={bulkTaskDelete}
						buttonStyle={{
							width: "100%",
							fontWeight: "bold",
							backgroundColor: "#d4474f",
							color: "#ffffff",
						}}
						title={`(${tasksToDelete.length}) Delete Task`}
						color="light"
					/>
				</div>
			)}

			<Card content={
				<div>
					<CheckBox setSelectAll={setSelectAll}/>
					{tasks.length > 0 && tasks.map((task) => (
						<Task
							key={task.id}
							task={task}
							onTaskChange={checkTask}
							removeTask={removeTask}
						/>
					))}
					{
						tasks.length === 0 && (
							<div>
								No Tasks Found
							</div>
						)
					}
				</div>
			}
				style={{ margin: '10px', maxHeight: '100vh', overflow: 'scroll'}}
			>
			</Card>
			<div
				style={{
					bottom: "0px",
					padding: "0px 10px 10px 10px",
					width: "100%",
				}}
			>
				<Button
					onClick={showTaskFormModal}
					buttonStyle={{
						width: "100%",
						fontWeight: "bold",
						backgroundColor: "#0376fc",
						color: "#ffffff",
					}}
					title="New Task"
					icon={<MdAdd />}
					color="light"
				/>
			</div>
		</div>
	)
}

export default Tasks
