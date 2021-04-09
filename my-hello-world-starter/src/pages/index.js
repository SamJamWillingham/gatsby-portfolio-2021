import React from "react"
import plantSvg from "../images/entryway-monochrome-800px.png"
import "../styles/index.css"


export default function Home() {
  return <div className="App">
    <div className="name">
      sam<br />jam
    </div>
    <div className="arch"></div>
    <div className="contact">
      <i className="bi bi-linkedin"></i>
      <i className="bi bi-github"></i>
      <i className="bi bi-envelope"></i>
    </div>
    <img src={plantSvg} width={400} className="plant" />
    </div>
}
