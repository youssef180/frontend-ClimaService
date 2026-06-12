import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, currentUser } from "../Redux/Actions/UserActions";
import AllUsersCard from "./AllUsersCard";
import Form from "react-bootstrap/Form";

const AllUsers = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");

	useEffect(() => {
		dispatch(allUsers());
		dispatch(currentUser());
	}, [dispatch]);

	const fullUsers = useSelector((state) => state.UserReducer.everyUser) || [];

	const user = useSelector((state) => state.UserReducer.user);

	const filteredUsers = fullUsers
		.filter((el) => el._id !== user?._id)
		.filter((user) => user.email.toLowerCase().includes(search.toLowerCase()));

	return (
		<div className='users-page'>
			{/* HEADER */}
			<div className='users-header'>
				<h1>
					<span className='blue-text'>All</span>{" "}
					<span className='orange-text'>Users</span>
				</h1>

				<p>Manage registered users</p>
			</div>

			{/* SEARCH */}
			<div className='search-container'>
				<Form.Control
					className='users-search'
					type='text'
					placeholder='Search by email...'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			{/* USERS GRID */}
			{filteredUsers.length > 0 ? (
				<div className='users-grid'>
					{filteredUsers.map((el) => (
						<AllUsersCard key={el._id} el={el} />
					))}
				</div>
			) : (
				<div className='empty-users'>
					<h3>No users registered</h3>
				</div>
			)}
		</div>
	);
};

export default AllUsers;
