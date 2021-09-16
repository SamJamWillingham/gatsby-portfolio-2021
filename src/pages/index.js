import React, { useState } from "react"
import Person from "../images/icons/person_icon"
import Briefcase from "../images/icons/briefcase_icon"
import XP from "../components/XP"
import About from "../components/About"
import Skills from "../components/Skills"
import Code from "../images/icons/code_icon"
import Certifications from "../components/Certifications"
import Award from "../images/icons/award_icon"
import Social from "../components/Social"
import Chat from "../images/icons/chat_icon"
import Hobbies from "../components/Hobbies"
import Joystick from "../images/icons/joystick_icon"
import "../styles/index.css"



export default function Home() {
	const [aboutClicked, setAboutClicked] = useState("false");
	const handleAboutClick = () => {
		setAboutClicked(!aboutClicked);
	}

	const [xpClicked, setXpClicked] = useState("false");
	const handleXpClick = () => {
		setXpClicked(!xpClicked);
	}

	const [skillsClicked, setSkillsClicked] = useState("false");
	const handleSkillsClick = () => {
		setSkillsClicked(!skillsClicked);
	}

	const [certsClicked, setCertsClicked] = useState("false");
	const handleCertsClick = () => {
		setCertsClicked(!certsClicked);
	}

	const [socialClicked, setSocialClicked] = useState("false");
	const handleSocialClick = () => {
		setSocialClicked(!socialClicked);
	}

	const [hobbiesClicked, setHobbiesClicked] = useState("false");
	const handleHobbiesClick = () => {
		setHobbiesClicked(!hobbiesClicked);
	}

	return <div className="App theme-light">
		<div className="name">
			{`<samJam />`}
		</div>
		<div className="grid-wrapper">
			<div className={aboutClicked ? "grid-block about" : "grid-block about clicked"}
				onClick={handleAboutClick}>
				{aboutClicked ? (
					<div className="pop">
						<Person />
						<h1>About</h1>
					</div>
				) : (<About />)}


			</div>
			<div className={xpClicked ? "grid-block xp" : "grid-block xp clicked"}
				onClick={handleXpClick}>
				{xpClicked ? (
					<div className="pop">
						<Briefcase />
						<h1>Work Experience</h1>
					</div>
				) : (<XP />)}

			</div>
			<div className={skillsClicked ? "grid-block skills" : "grid-block skills clicked"}
				onClick={handleSkillsClick}>
				{skillsClicked ? (
					<div className="pop">
						<Code />
						<h1>Programming skills</h1>
					</div>
				) : (<Skills />)}

			</div>
			<div className={certsClicked ? "grid-block certs" : "grid-block certs clicked"}
				onClick={handleCertsClick}>
				{certsClicked ? (
					<div className="pop">
						<Award />
						<h1>Certifications</h1>
					</div>
				) : (<Certifications />)}

			</div>
			<div className={socialClicked ? "grid-block social" : "grid-block social clicked"}
				onClick={handleSocialClick}>
				{socialClicked ? (
					<div className="pop">
						<Chat />
						<h1>Follow me</h1>
					</div>
				) : (<Social />)}

			</div>
			<div className={hobbiesClicked ? "grid-block hobbies" : "grid-block hobbies clicked"}
				onClick={handleHobbiesClick}>
				{hobbiesClicked ? (
					<div className="pop">
						<Joystick />
						<h1>Interests &amp; Hobbies</h1>
					</div>
				) : (<Hobbies />)}
			</div>
		</div>
	</div >
}
