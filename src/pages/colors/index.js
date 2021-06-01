import React, { useState } from "react";

function Colors() {
	const [color, changeColor] = useState("blue");

	function handleClick(e) {
		changeColor(e.target.getAttribute("data-color"));
	}

	return (
		<div className="App">
			<button data-color="blue" onClick={handleClick}>
				blue
			</button>
			<button data-color="green" onClick={handleClick}>
				green
			</button>
			<button data-color="red" onClick={handleClick}>
				red
			</button>

			<div className={`box ${color}`}>Lorem Ipsum</div>
		</div>
	);
}

export default Colors;
