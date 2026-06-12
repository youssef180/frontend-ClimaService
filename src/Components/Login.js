import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/Actions/UserActions";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div className='login-page'>
			<div className='login-card'>
				<div className='login-header'>
					<h1>
						<span className='blue-text'>Welcome</span>{" "}
						<span className='orange-text'>Back</span>
					</h1>

					<p>Login to access your account</p>
				</div>

				<Form className='login-form'>
					<Form.Group className='mb-3'>
						<Form.Label>Email Address</Form.Label>
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
						className='login-btn'
						onClick={(e) => {
							e.preventDefault();
							dispatch(login({ email, password }, navigate));
						}}
						type='submit'
					>
						Login
					</Button>

					<div className='register-text'>
						Don’t have an account?
						<Link to='/Register' className='register-link'>
							Register
						</Link>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default Login;
