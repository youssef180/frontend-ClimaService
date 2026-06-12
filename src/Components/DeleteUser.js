import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../Redux/Actions/UserActions";
import { useDispatch } from "react-redux";

function DeleteUser({ id }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();

	return (
		<>
			<Button className='delete-btn' onClick={handleShow}>
				Delete
			</Button>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Delete User</Modal.Title>
				</Modal.Header>

				<Modal.Body>Are you sure you want to delete this user?</Modal.Body>

				<Modal.Footer>
					<Button className='cancel-btn' onClick={handleClose}>
						Cancel
					</Button>

					<Button
						className='confirm-delete-btn'
						onClick={() => {
							handleClose();
							dispatch(deleteUser(id));
						}}
					>
						Confirm
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteUser;
