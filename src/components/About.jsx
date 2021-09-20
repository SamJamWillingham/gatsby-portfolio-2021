import React from "react";
import selfie from "../images/square_crop.jpg"

export default function About() {
	return (<div className="expanded-div">
		<div className="expanded-flex-item">
			<div className="inner-card">
				<div className="card-item">
					<img src={selfie} alt="Sam selfie" />
				</div>
				<div className="card-item">
					<h2>Sam Fields Willingham</h2>
					<p>she/her/they</p>
					<p>Charlotte, NC</p>
					<a href="hello@samjam.dev">hello@samjam.dev</a>
				</div>
			</div>
		</div>
		<div className="expanded-flex-item add-padding">
			<p>
				I am currently a Junior Web Developer for Vahterus Oy. Before I started web development,
				I was a high school teacher for five years! I have a bachelor's degree in English and five web development
				certifications. I love connecting with people around the world and learning as much as I can from others!
			</p>
		</div>

	</div>)
}
