import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOneProduct, updateProduct } from "../Redux/Actions/ProductAction";

const EditProduct = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOneProduct(id));
	}, [dispatch, id]);

	const product = useSelector((state) => state.ProductReducer.product);

	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		if (product) {
			setTitle(product.title || "");
			setImage(product.image || "");
			setPrice(product.price || "");
			setDescription(product.description || "");
		}
	}, [product]);

	const navigate = useNavigate();

	return (
		<div className='form-page'>
			<div className='modern-form-card'>
				<h1 className='form-title'>
					Edit <span className='orange-text'>Product</span>
				</h1>

				<Form>
					<Form.Group className='mb-4'>
						<Form.Label>Title</Form.Label>
						<Form.Control
							className='modern-input'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-4'>
						<Form.Label>Image</Form.Label>
						<Form.Control
							className='modern-input'
							value={image}
							onChange={(e) => setImage(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-4'>
						<Form.Label>Price</Form.Label>
						<Form.Control
							className='modern-input'
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							type='number'
						/>
					</Form.Group>

					<Form.Group className='mb-4'>
						<Form.Label>Description</Form.Label>
						<Form.Control
							as='textarea'
							rows={4}
							className='modern-input'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Form.Group>

					<Button
						className='modern-btn'
						onClick={(e) => {
							e.preventDefault();

							dispatch(
								updateProduct(
									product._id,
									{
										title,
										image,
										description,
										price,
									},
									navigate,
								),
							);
						}}
					>
						Save Changes
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default EditProduct;
