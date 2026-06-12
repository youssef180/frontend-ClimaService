import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneProduct } from "../Redux/Actions/ProductAction";
import Button from "react-bootstrap/Button";
import DeleteProduct from "./DeleteProduct";
import { addCommand } from "../Redux/Actions/CommandeActions";

const DescriptionProduct = () => {
	const token = localStorage.getItem("token");
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [qte, setQte] = useState(1);

	useEffect(() => {
		dispatch(getOneProduct(id));
	}, [dispatch, id]);

	const product = useSelector((state) => state.ProductReducer.product);

	const user = useSelector((state) => state.UserReducer.user);

	return (
		<div className='description-page'>
			<div className='product-details-card'>
				{/* IMAGE */}
				<div className='product-left'>
					<img
						src={product.image}
						alt='Not Found'
						className='description-image'
					/>
				</div>

				{/* INFO */}
				<div className='product-right'>
					{user?.role === "admin" && (
						<div className='admin-actions'>
							<Button
								className='edit-btn'
								as={Link}
								to={`/EditProduct/${product._id}`}
							>
								Edit
							</Button>

							<DeleteProduct product={product} />
						</div>
					)}

					<h1 className='description-title'>{product.title}</h1>

					<p className='description-text'>{product.description}</p>

					<h2 className='description-price'>{product.price} DT</h2>

					{/* QUANTITY */}
					<div className='quantity-box'>
						<Button
							className='qty-btn'
							onClick={() => qte > 1 && setQte(qte - 1)}
						>
							-
						</Button>

						<span className='qty-number'>{qte}</span>

						<Button className='qty-btn' onClick={() => setQte(qte + 1)}>
							+
						</Button>
					</div>

					{/* BUTTON */}
					{token && user ? (
						<Button
							className='command-btn'
							onClick={() =>
								dispatch(
									addCommand(
										{
											product: product._id,
											qte,
											totalPrice: qte * product.price,
										},
										navigate,
									),
								)
							}
						>
							Command Now
						</Button>
					) : (
						<Button className='command-btn' as={Link} to='/Register'>
							Command Now
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default DescriptionProduct;
