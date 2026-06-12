import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../Redux/Actions/ProductAction";

const AddProduct = () => {
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div className='form-page'>
			<div className='modern-form-card'>
				<h1 className='form-title'>
					Add <span className='orange-text'>Product</span>
				</h1>

				<Form>
					<Form.Group className='mb-4'>
						<Form.Label>Title</Form.Label>
						<Form.Control
							className='modern-input'
							onChange={(e) => setTitle(e.target.value)}
							type='text'
							placeholder='Enter title'
						/>
					</Form.Group>

					<Form.Group className='mb-4'>
						<Form.Label>Image URL</Form.Label>
						<Form.Control
							className='modern-input'
							onChange={(e) => setImage(e.target.value)}
							type='text'
							placeholder='Enter image'
						/>
					</Form.Group>

					<Form.Group className='mb-4'>
						<Form.Label>Price</Form.Label>
						<Form.Control
							className='modern-input'
							onChange={(e) => setPrice(e.target.value)}
							type='number'
							placeholder='Enter price'
						/>
					</Form.Group>

					<Form.Group className='mb-4'>
						<Form.Label>Description</Form.Label>
						<Form.Control
							as='textarea'
							rows={4}
							className='modern-input'
							onChange={(e) => setDescription(e.target.value)}
							placeholder='Enter description'
						/>
					</Form.Group>

					<Button
						className='modern-btn'
						onClick={(e) => {
							e.preventDefault();
							dispatch(
								addProduct(
									{
										title,
										image,
										price,
										description,
									},
									navigate,
								),
							);
						}}
					>
						Add Product
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default AddProduct;
