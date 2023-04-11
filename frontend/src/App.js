// Importing modules
//import React, { useState, useEffect } from "react";
//import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import "./App.css";
import { LoadFrameBuffer/*, Loadh5, NextFrame*/ } from "./components/routes.js"
//import Frame from "./buffer/frame.jpeg"

function App() {
	/*const [data, setdata] = useState({
		date: ""
	});

	useEffect(() => {
		fetch("/test").then((res) =>
			res.json().then((data) => {
				setdata({
					date: data.Date
				});
			})
		);
	}, []);*/
	
	// Anything outside the <BrowserRouter> tag will render on every page
	return (

		<div className="App">
			<header className="App-header">
				HDF5 Viewer
			</header>
			
			<div>
				<input type="text"></input>
				<p>{/*{data.date}*/}</p>
				<button type="button" onClick={goHome}>
					Home
				</button>
				<button type="button" onClick={goToLoadH5}>
					Load H5
				</button>
				<button type="button" onClick={goToNextFrame}>
					Next Frame
				</button>
				<button type="button" onClick={decreasePlayRate}>
					&lt;&lt;
				</button>
				<button type="button" onClick={increasePlayRate}>
					&gt;&gt;
				</button>
				<button type="button" onClick={test}>
					<test2/>
				</button>
]			</div>

			<div>
				{<LoadFrameBuffer/>}
			</div>
			
		</div>
	);
}

/*function encodeIntoAtPosition(string, u8array, position) {
	const encoder = new TextEncoder();
	return encoder.encodeInto(
		string,
		position ? u8array.subarray(position | 0) : u8array
	);
}*/

async function test() {
	//var y;
	//fetch('/sendstringasbytes').then((x) => (console.log(x.body)));
	//fetch('/sendstringasbytes').then((x) => (console.log(JSON.stringify(x))));
	//fetch('/sendstringasbytes').then((x) => (console.log(x)));
	//console.log(y);
	//console.log(JSON.stringify(y))

	/*var y = fetch('/sendstringasbytes')
		.then(function (response) {
			return response.json();
		}).then(function (text) {
			//console.log(text)
			//console.log('GET response:');
			//console.log(text.greeting);
			return text.greeting
		});

	console.log('----')
	console.log(y)
	console.log('----')*/

	const { x } = await fetch('/sendstringasbytes')
		.then(function (response) {
			return response.json();
		}).then(function (text) {
			//console.log(text)
			//console.log('GET response:');
			//console.log(text.greeting);
			return text.greeting
		});

	console.log('----')
	console.log(x)
	console.log('----')

	//var uint8array = new TextEncoder("utf-8").encode("Plain Text");
	//var string = new TextDecoder().decode(y);
	//console.log(uint8array, string)
}

async function test2() {

	const { x } = await fetch('/sendstringasbytes')
		.then(function (response) {
			return response.json();
		}).then(function (text) {
			//console.log(text)
			//console.log('GET response:');
			//console.log(text.greeting);
			return text.greeting
		});

	return <div>{x}</div>
}

export default App;

function goHome() {
	//window.location.href='/'
}

function goToLoadH5() {
	fetch("/loadh5");
	//window.location.href = '/loadh5';
}

function goToNextFrame() {
	fetch("/nextframe");
	//window.location.href='nextframe'
}

function increasePlayRate() {
	let data = fetch('/increaseplayrate').then(ddd => ddd.json()).then(data => { });
	console.log(data);
}

function decreasePlayRate() {
	let data = fetch('/decreaseplayrate').then(ddd => ddd.json()).then(data => { });
	console.log(data);
}

/*

<div>
				<BrowserRouter>
					<Routes>
						<Route path="/" element="<p>/</p>"></Route>
						<Route path="/test" element={<LoadFrameBuffer />}></Route>
						<Route path="/loadh5" element={<Loadh5 />}></Route>
						<Route path="/nextframe" element={<NextFrame />}></Route>
					</Routes>
				</BrowserRouter>
			</div>

*/