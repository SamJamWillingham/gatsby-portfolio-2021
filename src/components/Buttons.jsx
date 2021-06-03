import React, { useState } from "react"
import Gatsby from "../images/gatsby";
import GraphQL from "../images/graphQL";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faSass, faBootstrap, faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import BreatheMongoliaLogo from "../images/BreatheMongoliaLogo"
import "../styles/buttons.css"

function Buttons() {
    const [openAbout, setOpenAbout] = useState(false);
    const [aboutChevron, setAboutChevron] = useState('bi bi-chevron-down');
    const [openSkills, setOpenSkills] = useState(false);
    const [skillsChevron, setSkillsChevron] = useState('bi bi-chevron-down');
    const [openCert, setOpenCert] = useState(false);
    const [certChevron, setCertChevron] = useState('bi bi-chevron-down');

    const [openProject, setOpenProject] = useState(false);
    const [projectChevron, setProjectChevron] = useState('bi bi-chevron-down');


    return (
        <div className="button-wrapper">
            <button
                onClick={() => {
                    setAboutChevron(aboutChevron === 'bi bi-chevron-up' ? 'bi bi-chevron-down' : 'bi bi-chevron-up')
                    setOpenAbout(!openAbout)
                }}>
                <i className="bi bi-person"></i>About<i className={aboutChevron}></i>
            </button>

            {openAbout ? (<div className="about-p">
                <p> I am currently a Junior Web Developer for Vahterus Oy. Before I started web development,
                I was a high school teacher for five years! I have a bachelor's degree in English and four web development
                        certifications. I have been focusing predominatly on React and React frameworks, but I am currently learning PHP and Twig! I love connecting with people around the world and learning as much as I can from others!<br />Want to work on a project together? DM me on instagram or use the contact buttons above!</p>
            </div>) : (<></>)}

            <button
                onClick={() => {
                    setSkillsChevron(skillsChevron === 'bi bi-chevron-up' ? 'bi bi-chevron-down' : 'bi bi-chevron-up')
                    setOpenSkills(!openSkills)
                }}>
                <i className="bi bi-code-slash"></i>Skills + Technologies<i className={skillsChevron}></i></button>

            {openSkills ? (<div id="tech-icon-wrapper">
                <FontAwesomeIcon icon={faHtml5} size="2x" />
                <FontAwesomeIcon icon={faSass} size="2x" />
                <FontAwesomeIcon icon={faBootstrap} size="2x" />
                <FontAwesomeIcon icon={faJs} size="2x" />
                <FontAwesomeIcon icon={faReact} size="2x" />
                <Gatsby />
                <GraphQL />
                <FontAwesomeIcon icon={faNodeJs} size="2x" />
            </div>) : (<></>)}

            <button
                onClick={() => {
                    setCertChevron(certChevron === 'bi bi-chevron-up' ? 'bi bi-chevron-down' : 'bi bi-chevron-up')
                    setOpenCert(!openCert)
                }}>
                <i className="bi bi-award"></i>Certifications<i className={certChevron}></i></button>

            {openCert ? (<div id="certification-wrapper">
                <a href="https://www.shecodes.io/certificates/cb0ef7f22d93dfdb629e6f97198482b4">Introduction to Coding -SheCodes</a><br />
                <a href="https://www.shecodes.io/certificates/1be2599ee6b555613e53f8e6a84b8328">Front End Development -SheCodes</a><br />
                <a href="https://www.shecodes.io/certificates/370d835ecda3fd24895ade35bcb679ed">React Development -SheCodes</a><br />
                <a href="https://www.freecodecamp.org/certification/samjamwillingham/responsive-web-design">Responsive Web Design -freeCodeCamp</a><br />
                <a href="https://www.udemy.com/certificate/UC-b994a18e-53bd-445e-8d3a-84f33bc4df8b/">Node, SQL, PostgreSQL - Mastering Backend Web Development</a>
            </div>) : (<></>)}

            <button
                onClick={() => {
                    setProjectChevron(projectChevron === 'bi bi-chevron-up' ? 'bi bi-chevron-down' : 'bi bi-chevron-up')
                    setOpenProject(!openProject)
                }}>
                <i className="bi bi-hammer"></i>Projects<i className={projectChevron}></i></button>

            {openProject ? (<div id="project-wrapper">
                <a href="https://clever-hugle-333d69.netlify.app/"><i className="bi bi-cloud-drizzle-fill"></i>React Weather App with SheCodes</a><br />
                <a href="https://ecstatic-leakey-e874b0.netlify.app/"><i className="bi bi-stars"></i>Tarot Card Drawer</a><br />
                <a href="https://lucid-clarke-3b55e8.netlify.app/"><i className="bi bi-peace"></i>Meditation Timer</a><br />
                <a href=""><BreatheMongoliaLogo />About Us page of Breathe Mongolia</a><br />
            </div>) : (<></>)}

        </div>
    )
}
export default Buttons