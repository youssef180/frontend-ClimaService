import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { deleteCommande } from "../Redux/Actions/CommandeActions";

function DeleteCommand({ id }) {
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
					<Modal.Title>Delete Command</Modal.Title>
				</Modal.Header>

				<Modal.Body>Are you sure you want to delete this command?</Modal.Body>

				<Modal.Footer>
					<Button className='cancel-btn' onClick={handleClose}>
						Cancel
					</Button>

					<Button
						className='confirm-delete-btn'
						onClick={() => {
							handleClose();
							dispatch(deleteCommande(id));
						}}
					>
						Confirm
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteCommand;
