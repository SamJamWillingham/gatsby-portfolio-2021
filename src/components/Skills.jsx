import React from "react"
import "../styles/skills.css"

export default function Skills() {
	return (
		<div className="expanded-div">
			<h1>Programming Skills</h1>

			<div className="meter-wrapper">
				<div className="meter-icon">
					<h3>HTML</h3>
				</div>
				<div className="meter">
					<span style={{ width: "92%" }}></span>
				</div>
			</div>

			<div className="meter-wrapper">
				<div className="meter-icon">
					<h3>CSS</h3>
				</div>
				<div className="meter">
					<span style={{ width: "92%" }}></span>
				</div>
			</div>

			<div className="meter-wrapper">
				<div className="meter-icon">
					<h3>JavaScript</h3>
				</div>
				<div className="meter">
					<span style={{ width: "88%" }}></span>
				</div>
			</div>

		</div>
	)
}
