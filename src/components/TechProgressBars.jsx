import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap"
import MediaQuery from 'react-responsive'
import Html from "../images/icons/html_icon"
import Css from "../images/icons/css_icon"
import Js from "../images/icons/js_icon"
import Typescript from "../images/icons/typescript_icon"
import Sass from "../images/icons/sass"
import ReactIcon from "../images/icons/react_icon"
import BootstrapIcon from "../images/icons/bootstrap_icon"
import GatsbyIcon from "../images/icons/gatsby_icon"
import GraphQL from "../images/icons/graphql_icon"
import NodeJs from "../images/icons/nodejs_icon"
import MySql from "../images/icons/mysql_icon"
import PhpIcon from "../images/icons/php_icon"
import Csharp from "../images/icons/cSharp_icon";
import Markdown from "../images/icons/markdown_icon";


export default function TechProgressBars() {

	return (
		<div id="tech-expanded">
			<MediaQuery minWidth={1150}>
				< Container >
					<Row>
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<Html />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={95} striped variant="warning" />
								</Col>
							</Row>
						</Col>
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<Css />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={96} striped variant="warning" />
								</Col>
							</Row>
						</Col>
					</Row>

					<Row className="add-padding">
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<Js />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={85} striped variant="warning" />
								</Col>
							</Row>
						</Col>
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<Typescript />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={70} striped variant="warning" />
								</Col>
							</Row>
						</Col>
					</Row>

					<Row className="add-padding">
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<Sass />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={96} striped variant="warning" />
								</Col>
							</Row>
						</Col>
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<ReactIcon />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={85} striped variant="warning" />
								</Col>
							</Row>
						</Col>
					</Row>

					<Row className="add-padding">
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<BootstrapIcon />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={80} striped variant="warning" />
								</Col>
							</Row>
						</Col>
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<GatsbyIcon />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={65} striped variant="warning" />
								</Col>
							</Row>
						</Col>
					</Row>

					<Row className="add-padding">
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<NodeJs />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={80} striped variant="warning" />
								</Col>
							</Row>
						</Col>
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<GraphQL />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={75} striped variant="warning" />
								</Col>
							</Row>
						</Col>
					</Row>

					<Row className="add-padding">
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<MySql />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={55} striped variant="warning" />
								</Col>
							</Row>
						</Col>
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<PhpIcon />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={55} striped variant="warning" />
								</Col>
							</Row>
						</Col>
					</Row>

					<Row className="add-padding">
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<Csharp />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={30} striped variant="warning" />
								</Col>
							</Row>
						</Col>
						<Col className="col-6">
							<Row>
								<Col className="col-1">
									<Markdown />
								</Col>
								<Col className="col-11 add-padding">
									<ProgressBar animated now={90} striped variant="warning" />
								</Col>
							</Row>
						</Col>
					</Row>
				</Container >

			</MediaQuery>
			<MediaQuery maxWidth={1150}>
				<Container>
					<Row className="add-padding">
						<Col className="col-1">
							<Html />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={95} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<Css />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={96} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<Js />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={85} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<Typescript />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={70} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<Sass />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={96} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<ReactIcon />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={85} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<BootstrapIcon />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={80} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<GatsbyIcon />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={65} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<NodeJs />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={80} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<GraphQL />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={75} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<MySql />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={55} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<PhpIcon />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={55} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<Csharp />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={30} striped variant="warning" />
						</Col>
					</Row>
					<Row className="add-padding">
						<Col className="col-1">
							<Markdown />
						</Col>
						<Col className="col-11 add-padding">
							<ProgressBar animated now={90} striped variant="warning" />
						</Col>
					</Row>
				</Container>
			</MediaQuery>
		</div >
	)
}