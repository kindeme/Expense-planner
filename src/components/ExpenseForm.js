import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ handleAdd }) => {
	const [name, setName] = useState("");
	const [cost, setCost] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "" || cost === "") {
			alert("All the fields are mandatory");
			return;
		}
		const expense = {
			id: new Date().getTime().toString(),
			name: name,
			cost: cost,
		};
		handleAdd(expense);
		setCost("");
		setName("");
	};
	return (
		<div className="expenseForm">
			<h2> Add Expense</h2>
			<form className="addform" onSubmit={handleSubmit}>
				<label>
					<span>Name</span>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>

				<label>
					<span>Cost </span>
					<input
						type="text"
						value={cost}
						onChange={(e) => setCost(e.target.value)}
					/>
				</label>

				<button> Save</button>
			</form>
		</div>
	);
};

export default ExpenseForm;
