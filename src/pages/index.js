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
		<div className="flex-wrapper">
			<div className="flex-left">
				<div className="flex-block about">
					<Person />
					About
				</div>
				<div className="flex-block skills">
					<Code />
					Programming skills
				</div>
				<div className="flex-block social">
					<Chat />
					Follow me
				</div>
			</div>
			<div className="flex-right">
				<div className="flex-block xp">
					<Briefcase />
					Work Experience
				</div>
				<div className="flex-block certs">
					<Award />
					Certifications
				</div>
				<div className="flex-block hobbies">
					<Joystick />
					Interests Hobbies
				</div>
			</div>
		</div>
	</div >
}
