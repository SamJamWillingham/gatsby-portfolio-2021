import React, { useState } from "react"
import womanWLaptop from "../images/undraw_Dev_focus_re_6iwt.svg"
import Buttons from "../components/Buttons"
import "../styles/index.css"
import Sun from "../images/Sun"
import ToggleOff from "../images/toggle_off"
import ToggleOn from "../images/toggle_on"
import Moon from "../images/Moon"
import witch from "../images/undraw_witch_7uk7.svg"

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	const [themeMode, setThemeMode] = useState("App light-theme");

	return (
		<div className={themeMode}>
			<div className="name">
				sam<br />jam
			</div>
			<div className="dark-mode-wrapper" onClick={() => {
				setDarkMode(!darkMode);
				setThemeMode(themeMode === "App light-theme" ? "App dark-theme" : "App light-theme")
			}}>
				<Sun />
				{darkMode ? (<ToggleOn />) : (<ToggleOff />)}
				<Moon />
			</div>
			<div className="banner"></div>
			<div className="contact">
				<a href="https://www.linkedin.com/in/samantha-willingham-79576a1a8/"><i className="bi bi-linkedin"></i></a>
				<a href="https://github.com/SamJamWillingham"><i className="bi bi-github"></i></a>
				<a href="mailto:hello@samjam.dev"><i className="bi bi-envelope"></i></a>
			</div>
			<Buttons />
			{darkMode ? (<img src={witch} width={400} className="woman_svg" />) : (<img src={womanWLaptop} width={400} className="woman_svg" />)}

		</div>
	)
}
