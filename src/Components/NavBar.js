import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../Redux/Actions/UserActions";

const NavBar = () => {
	const token = localStorage.getItem("token");
	const user = useSelector((state) => state.UserReducer.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<Navbar expand='lg' className='custom-navbar'>
			<Container>
				<Navbar.Brand as={Link} to='/' className='d-flex align-items-center'>
					<h3 className='brand-title ms-2'>
						<span className='blue-text'>Clima</span>
						<span className='orange-text'>Service</span>
					</h3>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />

				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto nav-links'>
						<Nav.Link as={Link} to='/'>
							Home
						</Nav.Link>

						<Nav.Link as={Link} to='/ListProducts'>
							Products
						</Nav.Link>

						{token && user ? (
							<>
								<Nav.Link as={Link} to='/Profile'>
									Profile
								</Nav.Link>

								{user.role == "admin" ? (
									<>
										<Nav.Link as={Link} to='/allUsers'>
											Users
										</Nav.Link>

										<Nav.Link as={Link} to='/AddProduct'>
											Add Product
										</Nav.Link>

										<Nav.Link as={Link} to='/ListCommandes'>
											Commandes
										</Nav.Link>
									</>
								) : (
									<Nav.Link as={Link} to='/ListMyCommandes'>
										My Commandes
									</Nav.Link>
								)}

								<Nav.Link
									className='logout-btn'
									onClick={() => {
										dispatch(logOut());
										navigate("/");
									}}
								>
									LogOut
								</Nav.Link>
							</>
						) : (
							<>
								<Nav.Link as={Link} to='/Register'>
									Register
								</Nav.Link>

								<Nav.Link as={Link} to='/Login'>
									Login
								</Nav.Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
