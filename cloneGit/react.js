import React from 'react'
import ReactDom from 'react-dom'

function tick()
{
	const element = (

		<div>
			<h1> hello World </h1>
			<h2> it is {new Date().toLocalTimeString()} </h2>
		</div>
	);
	
	ReactDOM.render(
		element,
		document.getElementById("root")
	);
}

setInterval(tick , 1000);
