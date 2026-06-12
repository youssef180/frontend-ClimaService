import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Actions/ProductAction";
import CardProducts from "./CardProducts";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ListProducts = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	const products = useSelector((state) => state.ProductReducer.products) || [];

	const user = useSelector((state) => state.UserReducer.user);

	return (
		<div className='products-page'>
			<div className='products-header'>
				<h1>
					<span className='blue-text'>Our</span>{" "}
					<span className='orange-text'>Products</span>
				</h1>

				<p>Discover our premium air conditioners and accessories</p>
			</div>

			{products.length > 0 ? (
				<div className='products-grid'>
					{products.map((el) => (
						<CardProducts key={el._id} el={el} />
					))}
				</div>
			) : (
				<div className='empty-products'>
					<h2>No products available</h2>

					{user?.role === "admin" && (
						<Button className='add-product-btn' as={Link} to='/AddProduct'>
							Add Product
						</Button>
					)}
				</div>
			)}
		</div>
	);
};

export default ListProducts;
