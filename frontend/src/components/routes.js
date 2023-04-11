//import React, { useState, useEffect } from "react";
import Frame from "../buffer/frame.jpeg"

export function Loadh5() {
	//useEffect(() => {fetch("/loadh5")}, []);

	return <p>Loadh5</p>
}

export function NextFrame() {
	//useEffect(() => {fetch("/nextframe")}, []);

	return <p>NextFrame</p>
}

export function LoadFrameBuffer() {
	return <img src={Frame} alt="Frame Buffer" className="" />
}

