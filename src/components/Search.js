import React from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
	return (
		<div className="search">
			<h2> Expenses</h2>
			<div>
				<input type="text" placeholder="Type to search" className="" />
				<FaSearch className="search-btn" />
			</div>
		</div>
	);
};

export default Search;
