import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../Redux/Actions/ProductAction";

function DeleteProduct({ product }) {
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<>
			<Button className='delete-btn' onClick={handleShow}>
				Delete
			</Button>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Delete Product</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Type the product name to confirm deletion:</p>

					<h4 style={{ color: "#ff7b00" }}>"{product.title}"</h4>

					<input
						type='text'
						className='delete-input'
						placeholder='Type product name'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</Modal.Body>

				<Modal.Footer>
					<Button className='cancel-btn' onClick={handleClose}>
						Cancel
					</Button>

					{product.title === title && (
						<Button
							className='confirm-delete-btn'
							onClick={() => {
								handleClose();
								dispatch(deleteProduct(product._id, navigate));
							}}
						>
							Delete
						</Button>
					)}
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteProduct;
