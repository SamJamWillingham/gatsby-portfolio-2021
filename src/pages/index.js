import React from "react"
import Briefcase from "../images/icons/briefcase_icon"
import Person from "../images/icons/person_icon"
import Code from "../images/icons/code_icon"
import Award from "../images/icons/award_icon"
import Chat from "../images/icons/chat_icon"
import Joystick from "../images/icons/joystick_icon"
import "../styles/index.css"


export default function Home() {
	return <div className="App theme-light">
		<div className="name">
			{`<samJam />`}
		</div>
		<div className="grid-wrapper">
			<div className="grid-block about">
				<Person />
				About
			</div>
			<div className="grid-block xp">
				<Briefcase />
				Work Experience
			</div>
			<div className="grid-block skills">
				<Code />
				Programming skills
			</div>
			<div className="grid-block certs">
				<Award />
				Certifications
			</div>
			<div className="grid-block social">
				<Chat />
				Follow me
			</div>
			<div className="grid-block hobbies">
				<Joystick />
				Interests &amp; Hobbies
			</div>
		</div>
	</div >
}
