import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../Redux/Actions/UserActions";

const Register = () => {
	const [userName, setuserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div className='register-page'>
			<div className='register-card'>
				<div className='register-header'>
					<h1>
						<span className='blue-text'>Create</span>{" "}
						<span className='orange-text'>Account</span>
					</h1>

					<p>Join us and start shopping climate products</p>
				</div>

				<Form className='register-form'>
					<Form.Group className='mb-3'>
						<Form.Label>UserName</Form.Label>
						<Form.Control
							onChange={(e) => setuserName(e.target.value)}
							type='text'
							placeholder='Enter your username'
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							onChange={(e) => setEmail(e.target.value)}
							type='email'
							placeholder='Enter your email'
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							onChange={(e) => setPassword(e.target.value)}
							type='password'
							placeholder='Enter password'
						/>
					</Form.Group>

					<Button
						className='register-btn'
						onClick={(e) => {
							e.preventDefault();
							dispatch(register({ userName, email, password }, navigate));
						}}
						type='submit'
					>
						Register
					</Button>

					<div className='signin-text'>
						Already have an account?
						<Link to='/Login' className='signin-link'>
							Sign In
						</Link>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default Register;
