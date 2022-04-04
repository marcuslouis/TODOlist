import React, { useState } from "react";
import "../../styles/index.css";
//create your first component
const Home = () => {
	const [item, setItem] = useState("");
	const [todoList, setTodolist] = useState([]);

	const line = (X) => {
		const newList = todoList.filter((element, i) => X !== i);
		setTodolist(newList);
	};
	return (
		<>
			<div>
				<input
					type="text"
					className="fore-control"
					placeholder="username"
					onChange={(e) => setItem(e.target.value)}
					value={item}
				/>
				<a
					onClick={() => {
						if (item !== "") {
							setTodolist([...todoList, item]);
							setItem("");
						}
					}}
					type="button"
					className="btn btn-primary"
					id="basic-addon1">
					Button
				</a>
			</div>
			<ul>
				{todoList.map((element, index) => {
					return (
						<>
							<li key={index} className="mr-2">
								{element}
								<a
									className="m1-2 btn btn-danger"
									onClick={() => {
										line(index);
									}}>
									X
								</a>
							</li>
						</>
					);
				})}
			</ul>
		</>
	);
};

export default Home;
