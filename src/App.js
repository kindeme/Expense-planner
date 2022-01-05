import "./App.css";
import { useState, useEffect } from "react";
import ListExpense from "./components/ListExpense";
import Search from "./components/Search";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";

function App() {
	const [expenses, setExpenses] = useState([]);

	const handleRemove = (id) => {
		let newExpenses = expenses.filter((expense) => expense.id !== id);
		setExpenses(newExpenses);
	};

	const handleAdd = (expense) => {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, expense];
		});
	};

	useEffect(() => {
		localStorage.setItem("expenses", JSON.stringify(expenses));
	}, [expenses]);

	useEffect(() => {
		const retrieveExpenses = JSON.parse(localStorage.getItem("expenses"));
		if (retrieveExpenses) {
			setExpenses(retrieveExpenses);
		}
	}, []);
	return (
		<div className="App">
			<h1> Budget Planner</h1>
			<Header expenses={expenses} />
			<Search />
			<ListExpense expenses={expenses} handleRemove={handleRemove} />
			<ExpenseForm handleAdd={handleAdd} />
		</div>
	);
}

export default App;
