import React from "react";
import "./ListExpense.css";
import { FaTimes } from "react-icons/fa";

const ListExpense = ({ expenses, handleRemove }) => {
	return (
		<section className="expense-list">
			{expenses.map((expense) => {
				const { id, name, cost } = expense;
				return (
					<article className="expense" key={id}>
						<p>{name}</p>
						<div>
							<p> ${cost}</p>

							<FaTimes
								className="icon"
								onClick={() => handleRemove(id)}
							/>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default ListExpense;
