import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import DisplayErrors from "./Components/DisplayErrors";
import EditProfile from "./Components/EditProfile";
import AllUsers from "./Components/AllUsers";
import ListProducts from "./Components/ListProducts";
import AddProduct from "./Components/AddProduct";
import DescriptionProduct from "./Components/DescriptionProduct";
import EditProduct from "./Components/EditProduct";
import ListMyCommandes from "./Components/ListMyCommandes";
import ListCommandes from "./Components/ListCommandes";

function App() {
	return (
		<div>
			<NavBar />
			<DisplayErrors />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Register' element={<Register />} />
				<Route path='/Login' element={<Login />} />
				<Route
					path='/Profile'
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
				<Route
					path='/EditProfile'
					element={
						<PrivateRoute>
							<EditProfile />
						</PrivateRoute>
					}
				/>
				<Route
					path='/AllUsers'
					element={
						<PrivateRoute>
							<AllUsers />
						</PrivateRoute>
					}
				></Route>
				<Route path='/ListProducts' element={<ListProducts />}></Route>
				<Route
					path='/AddProduct'
					element={
						<PrivateRoute>
							<AddProduct />
						</PrivateRoute>
					}
				></Route>
				<Route
					path='/DescriptionProduct/:id'
					element={<DescriptionProduct />}
				></Route>
				<Route
					path='/EditProduct/:id'
					element={
						<PrivateRoute>
							<EditProduct />
						</PrivateRoute>
					}
				></Route>
				<Route
					path='/ListCommandes'
					element={
						<PrivateRoute>
							<ListCommandes />
						</PrivateRoute>
					}
				></Route>
				<Route
					path='/ListMyCommandes'
					element={
						<PrivateRoute>
							<ListMyCommandes />
						</PrivateRoute>
					}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
