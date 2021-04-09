import React, { useState } from "react"
import Gatsby from "../images/gatsby";
import GraphQL from "../images/graphQL";
import "../styles/buttons.css"

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
                        setOpenAbout(!openAbout)}}>
                <i class="bi bi-person"></i>About<i className={aboutChevron}></i>
                </button>

                {openAbout ? (<div className={openAbout}>
                        <p className="about-p">I am a React developer, currently working for Vahterus Oy 
                        and volunteering for the non-profit, Breathe Mongolia. Before I started web development, 
                        I was a high school teacher for five years! I have a bachelor's degree in English and four web development
                        certifications. I love connecting with people around the world and learning as much as I can from others.</p>
                </div>) : (<></>)}
                        
                <button 
                    onClick={() => {
                        setSkillsChevron(skillsChevron === 'bi bi-chevron-up' ? 'bi bi-chevron-down' : 'bi bi-chevron-up')
                        setOpenSkills(!openSkills)}}>
                <i className="bi bi-code-slash"></i>Skills + Technologies<i className={skillsChevron}></i></button>
                
                {openSkills ? (<div id="tech-icon-wrapper">
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-sass"></i>
                    <i className="fab fa-bootstrap"></i>
                    <i className="fab fa-js"></i>
                    <i className="fab fa-react"></i>
                    <Gatsby />
                    <GraphQL />
                    <i class="fab fa-node-js"></i>
                </div>) : (<></>)}

                <button 
                    onClick={() => {
                        setCertChevron(certChevron === 'bi bi-chevron-up' ? 'bi bi-chevron-down' : 'bi bi-chevron-up')
                        setOpenCert(!openCert)}}>
                <i className="bi bi-award"></i>Certifications<i className={certChevron}></i></button>
               {
               openCert ? (<div id="certification-wrapper">
                    <a href="https://www.shecodes.io/certificates/cb0ef7f22d93dfdb629e6f97198482b4">Introduction to Coding -SheCodes</a><br />
                    <a href="https://www.shecodes.io/certificates/1be2599ee6b555613e53f8e6a84b8328">Front End Development -SheCodes</a><br />
                    <a href="https://www.shecodes.io/certificates/370d835ecda3fd24895ade35bcb679ed">React Development -SheCodes</a><br />
                    <a href="https://www.freecodecamp.org/certification/samjamwillingham/responsive-web-design">Responsive Web Design -freeCodeCamp</a>
                </div>) : (<></>)}

                
            </div>
    )
}
export default Buttons