import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/modalStyles.css"


export default function SecretPlaylistModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					You found my secret playlist! Nice.
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<iframe src="https://open.spotify.com/embed/album/4uG8q3GPuWHQlRbswMIRS6?si=HvL3B0KJTe6DeYggflcXAw" width="300" height="380" frameBorder="0"
					allowtransparency="true" allow="encrypted-media" className="playlist" title="hidden-playlist"></iframe>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}