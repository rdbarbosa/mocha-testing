import fetch from "node-fetch";
import React, { useState } from "react";
import CustomButton from "../../components/customButton";
import CustomInput from "../../components/customInput";

export default function AddTodo() {
	const [text, setText] = useState("");
	const [todo, setTodo] = useState([]);

	const handleAdd = (value) => {
		if (value === "") return;
		setTodo([...todo, value]);
		setText("");
		fetch(
			"https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
		)
			.then((response) => response.json())
			.then((commits) => commits[0].author.login);
	};

	return (
		<div>
			<CustomInput
				test="input"
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<CustomButton type="button" onClick={() => handleAdd(text)}>
				Add
			</CustomButton>
			{todo.map((item, i) => (
				<li id={item} key={i}>
					{item}
				</li>
			))}
		</div>
	);
}
