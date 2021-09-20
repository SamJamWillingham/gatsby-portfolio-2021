import React from "react"
import womanWLaptop from "../images/undraw_Dev_focus_re_6iwt.svg"
import Buttons from "../components/Buttons"
import "../styles/index.css"


export default function Home() {
	return <div className="App">
		<div className="name">
			sam<br />jam
		</div>
		<div className="banner"></div>
		<div className="contact">
			<a href="https://www.linkedin.com/in/samantha-willingham-79576a1a8/"><i className="bi bi-linkedin"></i></a>
			<a href="https://github.com/SamJamWillingham"><i className="bi bi-github"></i></a>
			<a href="mailto:hello@samjam.dev"><i className="bi bi-envelope"></i></a>
		</div>
		<Buttons />
		<img src={womanWLaptop} width={400} className="woman_svg" />
	</div>
}
