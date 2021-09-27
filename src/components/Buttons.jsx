import React, { useState } from "react"
import About from "../components/About"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/buttons.css"
import TechProgressBars from "./TechProgressBars"
import Certifications from "./Certifications"


function Buttons() {
	const [openAbout, setOpenAbout] = useState(false);
	const [aboutChevron, setAboutChevron] = useState('bi bi-chevron-down');
	const [openSkills, setOpenSkills] = useState(false);
	const [skillsChevron, setSkillsChevron] = useState('bi bi-chevron-down');
	const [openCert, setOpenCert] = useState(false);
	const [certChevron, setCertChevron] = useState('bi bi-chevron-down');


	return (
		<div className="button-wrapper">
			<button
				onClick={() => {
					setAboutChevron(aboutChevron === 'bi bi-chevron-up' ? 'bi bi-chevron-down' : 'bi bi-chevron-up')
					setOpenAbout(!openAbout)
				}}>
				<i className="bi bi-person"></i>About<i className={aboutChevron}></i>
			</button>

			{openAbout ? (<About />) : (<></>)}

			<button
				onClick={() => {
					setSkillsChevron(skillsChevron === 'bi bi-chevron-up' ? 'bi bi-chevron-down' : 'bi bi-chevron-up')
					setOpenSkills(!openSkills)
				}}>
				<i className="bi bi-code-slash"></i>Skills + Technologies<i className={skillsChevron}></i></button>

			{openSkills ? (<TechProgressBars />) : (<></>)}

			<button
				onClick={() => {
					setCertChevron(certChevron === 'bi bi-chevron-up' ? 'bi bi-chevron-down' : 'bi bi-chevron-up')
					setOpenCert(!openCert)
				}}>
				<i className="bi bi-award"></i>Certifications<i className={certChevron}></i></button>

			{openCert ? (<Certifications />) : (<></>)}

		</div>
	)
}
export default Buttons