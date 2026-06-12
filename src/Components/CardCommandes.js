import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCommande } from "../Redux/Actions/CommandeActions";
const CardCommandes = ({ el }) => {
	const dispatch = useDispatch();
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant='top' src={el?.product?.image} />
			<Card.Body>
				<Card.Title>{el?.user?.userName}</Card.Title>
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
				</Card.Text>
				<Card.Text>{el.status}</Card.Text>
				{el.status == "Pending" && (
					<>
						<Button
							variant='success'
							onClick={() =>
								dispatch(updateCommande(el._id, { status: "Accepted" }))
							}
						>
							Acccepted
						</Button>
						<Button
							variant='danger'
							onClick={() =>
								dispatch(updateCommande(el._id, { status: "Rejected" }))
							}
						>
							Rejected
						</Button>
					</>
				)}
			</Card.Body>
		</Card>
	);
};

export default CardCommandes;
