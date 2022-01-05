import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ expenses }) => {
	const [budget, setBudget] = useState(0);
	const [newBudget, setNewBudget] = useState("");
	const [isEditing, setIsEditing] = useState(true);
	const [remain, setRemain] = useState(0);
	const [spend, setSpend] = useState(0);

	// reduced method on an object of array from  this tutorial if you want result array or number "https://www.youtube.com/watch?v=6rNIY7W8IZM" or object result "https://www.youtube.com/watch?v=5BFkp8JjLEY"
	useEffect(() => {
		let totalCost = expenses.reduce((total, currentExpense) => {
			total += Number(currentExpense.cost);
			return total;
		}, 0);
		setRemain(budget - totalCost);
		setSpend(totalCost);
	}, [expenses, budget]);

	const handleBudget = (e) => {
		e.preventDefault();
		if (newBudget === "") {
			alert("please enter your new Budget");
			return;
		}
		setBudget(newBudget);
		setIsEditing(true);
		setNewBudget("");
	};

	return (
		<section className="header">
			<article className="budget">
				{isEditing ? (
					<p>
						Budget : <span>${budget}</span>
						<button onClick={() => setIsEditing(!isEditing)}>
							Edit
						</button>
					</p>
				) : (
					<form onSubmit={handleBudget}>
						<input
							className="budgetInput"
							type="text"
							value={newBudget}
							onChange={(e) => setNewBudget(e.target.value)}
						/>
						<button type="submit">Save</button>
					</form>
				)}
			</article>
			<article className="remain">
				<p>
					Remaining : <span>${remain}</span>
				</p>
			</article>
			<article className="spent-amount">
				<p>
					Spend so far : <span>${spend}</span>
				</p>
			</article>
		</section>
	);
};

export default Header;
