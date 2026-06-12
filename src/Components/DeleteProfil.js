import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteProfile } from "../Redux/Actions/UserActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function DeleteProfil() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<>
			<Button className='delete-btn' onClick={handleShow}>
				Delete Profile
			</Button>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Delete Profile</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					Are you sure you want to delete your account? This action cannot be
					undone.
				</Modal.Body>

				<Modal.Footer>
					<Button className='cancel-btn' onClick={handleClose}>
						Cancel
					</Button>

					<Button
						className='confirm-delete-btn'
						onClick={() => {
							handleClose();
							dispatch(deleteProfile(navigate));
						}}
					>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteProfil;
