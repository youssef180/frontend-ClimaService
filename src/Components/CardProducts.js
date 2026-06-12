import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardProducts = ({ el }) => {
	return (
		<Link to={`/DescriptionProduct/${el._id}`} className='product-link'>
			<Card className='product-card'>
				<div className='product-image-container'>
					<Card.Img variant='top' src={el.image} className='product-image' />
				</div>

				<Card.Body>
					<Card.Title className='product-title'>{el.title}</Card.Title>

					<Card.Text className='product-description'>
						{el.description?.slice(0, 80)}
						...
					</Card.Text>

					<Card.Text className='product-price'>{el.price} DT</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
};

export default CardProducts;
