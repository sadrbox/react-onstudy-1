import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
	const [todos, setTodos] = React.useState([
		{ id: 1, completed: false, title: "Купить хлеб" },
		{ id: 2, completed: true, title: "Купить масло" },
		{ id: 3, completed: false, title: "Купить молоко" },
	]);

	function toggleTodo(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	}

	function removeTodo(id) {
		setTodos(todos.filter((todo) => todo.id != id));
	}

	function addTodo() {
		setTodos(
			todos.concat([
				{
					title,
					id: Date.now(),
					completed: false,
				},
			])
		);
	}

	return (
		<Context.Provider value={{ removeTodo }}>
			<div className="wrapper">
				<h1>React Tutorial</h1>
				<AddTodo onCreate={addTodo} />
				<TodoList todos={todos} onToggle={toggleTodo} />
			</div>
		</Context.Provider>
	);
}

export default App;