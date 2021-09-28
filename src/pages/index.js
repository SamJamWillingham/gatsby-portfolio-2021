import React, { useState, useEffect } from "react"
import womanWLaptop from "../images/undraw_Dev_focus_re_6iwt.svg"
import Buttons from "../components/Buttons"
import "../styles/index.css"
import Sun from "../images/icons/Sun"
import ToggleOff from "../images/icons/toggle_off"
import ToggleOn from "../images/icons/toggle_on"
import Moon from "../images/icons/Moon"
import witch from "../images/undraw_witch_7uk7.svg"
import SecretPlaylistModal from "../components/SecretPlaylistModal"


export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	const [themeMode, setThemeMode] = useState("App light-theme");

	const [modalShow, setModalShow] = useState(false);
	const pressed = [];
	const secretCode = 'samjam';

	useEffect((e) => {
		window.addEventListener("keyup", (e) => {
			console.log(e.key);
			pressed.push(e.key);
			pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

			if (pressed.join('').includes(secretCode)) {
				console.log('You found my hidden playlist! Nice.')
				setModalShow(true);
			}
		})
	})

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
			{darkMode ? (<img src={witch} width={400} className="woman_svg" alt="Halloween witch" />) : (<img src={womanWLaptop} width={400} className="woman_svg" alt="woman sitting at computer" />)}
			<SecretPlaylistModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	)
}
