import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCommande } from "../Redux/Actions/CommandeActions";
import DeleteCommand from "./DeleteCommand";
const CardMyCommandes = ({ el }) => {
	const dispatch = useDispatch();
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant='top' src={el?.product?.image} />
			<Card.Body>
				{/* <Card.Title>{el.user.userName}</Card.Title> */}
				<Card.Text>{el?.product?.title}</Card.Text>
				<Card.Text>{el.totalPrice}</Card.Text>
				<Card.Text>{el.qte}</Card.Text>

				<Card.Text>
					{new Date(el.time).toLocaleString("fr-FR", {
						day: "2-digit",
						month: "2-digit",
						year: "numeric",
						hour: "2-digit",
						minute: "2-digit",
					})}
					<Card.Text>{el.status}</Card.Text>
				</Card.Text>

				{el.status == "Pending" && (
					// <Button
					// 	variant='danger'
					// 	onClick={() => dispatch(deleteCommande(el._id))}
					// >
					// 	Delete
					// </Button>
					<DeleteCommand id={el._id} />
				)}
			</Card.Body>
		</Card>
	);
};

export default CardMyCommandes;
