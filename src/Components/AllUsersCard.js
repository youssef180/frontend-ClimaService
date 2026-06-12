import Card from "react-bootstrap/Card";
import DeleteUser from "./DeleteUser";

const AllUsersCard = ({ el }) => {
	return (
		<Card className='user-card'>
			<div className='user-avatar'>{el.userName?.charAt(0).toUpperCase()}</div>

			<Card.Body className='user-card-body'>
				<Card.Title className='user-name'>{el.userName}</Card.Title>

				<Card.Subtitle className='user-email'>{el.email}</Card.Subtitle>

				<div className='user-actions'>
					<DeleteUser id={el._id} />
				</div>
			</Card.Body>
		</Card>
	);
};

export default AllUsersCard;
