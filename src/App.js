import React, { useState } from "react";
import Header from './components/Header';
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";

export default function App() {

	const [newTask, setNewTask] = useState({});
	
	const handleChange = ({ target }) => {
		const {name, value} = target;
		setNewTask((prev) => ({...prev, id: Date.now(), [name]: value}));
	};

	const [allTasks, setAllTasks] = useState([]);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		if(!newTask.title) return;
		setAllTasks((prev) => [...prev, newTask]);
		setNewTask({});
	};

	const handleDelete = (taskIdToRemove) => {
		setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
	};

	return(
		<div>
			<Header />
			<NewTask
				newTask={newTask}
				onChange={handleChange}
				onSubmit={handleSubmit}
			/>
			<TaskList
				allTasks={allTasks}
				handleDelete={handleDelete}
			/>
		</div>
	);
}