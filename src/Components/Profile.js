import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../Redux/Actions/UserActions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import DeleteProfil from "./DeleteProfil";

const Profile = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(currentUser());
	}, [dispatch]);

	const user = useSelector((state) => state.UserReducer.user);

	return (
		<div className='profile-page'>
			{user ? (
				<Card className='profile-card'>
					<div className='profile-header'>
						<div className='profile-avatar'>
							{user.userName?.charAt(0).toUpperCase()}
						</div>

						<h1 className='profile-name'>{user.userName}</h1>

						<p className='profile-email'>{user.email}</p>
					</div>

					<Card.Body className='profile-body'>
						<div className='profile-buttons'>
							<Link to='/EditProfile'>
								<Button className='profile-edit-btn'>Edit Profile</Button>
							</Link>

							<DeleteProfil />
						</div>
					</Card.Body>
				</Card>
			) : (
				<div className='no-profile'>
					<h2>No profile found</h2>
				</div>
			)}
		</div>
	);
};

export default Profile;
