import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser, updateProfile } from "../Redux/Actions/UserActions";

const EditProfile = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(currentUser());
	}, [dispatch]);

	const user = useSelector((state) => state.UserReducer.user);

	const [userName, setuserName] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		if (user) {
			setuserName(user.userName || "");
			setEmail(user.email || "");
		}
	}, [user]);

	const navigate = useNavigate();

	return (
		<div className='form-page'>
			<div className='modern-form-card'>
				<h1 className='form-title'>
					Edit <span className='orange-text'>Profile</span>
				</h1>

				<Form>
					<Form.Group className='mb-4'>
						<Form.Label>UserName</Form.Label>
						<Form.Control
							className='modern-input'
							value={userName}
							onChange={(e) => setuserName(e.target.value)}
							type='text'
						/>
					</Form.Group>

					<Form.Group className='mb-4'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							className='modern-input'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type='email'
						/>
					</Form.Group>

					<Button
						className='modern-btn'
						onClick={(e) => {
							e.preventDefault();

							dispatch(
								updateProfile(
									{
										userName,
										email,
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

export default EditProfile;
