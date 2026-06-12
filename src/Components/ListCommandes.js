import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommandes } from "../Redux/Actions/CommandeActions";
import { updateCommande } from "../Redux/Actions/CommandeActions";
import Form from "react-bootstrap/Form";

const ListCommandes = () => {
	const dispatch = useDispatch();

	const [statusFilter, setStatusFilter] = useState("All");

	useEffect(() => {
		dispatch(getAllCommandes());
	}, [dispatch]);

	const commandes =
		useSelector((state) => state.CommandeReducer.commandes) || [];

	const filteredCommandes = commandes.filter(
		(el) => statusFilter === "All" || el.status === statusFilter,
	);

	return (
		<div className='table-page'>
			<div className='table-header'>
				<h1>
					<span className='blue-text'>All</span>{" "}
					<span className='orange-text'>Commandes</span>
				</h1>
			</div>

			<div className='table-filter'>
				<Form.Select
					className='table-select'
					onChange={(e) => setStatusFilter(e.target.value)}
				>
					<option value='All'>All Status</option>
					<option value='Pending'>Pending</option>
					<option value='Accepted'>Accepted</option>
					<option value='Rejected'>Rejected</option>
				</Form.Select>
			</div>

			<div className='table-container'>
				<table className='modern-table'>
					<thead>
						<tr>
							<th>Product</th>
							<th>User</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Date</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>

					<tbody>
						{filteredCommandes.map((el) => (
							<tr key={el._id}>
								<td className='product-cell'>
									<img src={el?.product?.image} alt='' />
									{el?.product?.title}
								</td>

								<td>{el?.user?.userName}</td>

								<td>{el.totalPrice} DT</td>

								<td>{el.qte}</td>

								<td>{new Date(el.time).toLocaleString("fr-FR")}</td>

								<td>
									<span className={`status-badge ${el.status.toLowerCase()}`}>
										{el.status}
									</span>
								</td>

								<td>
									{el.status === "Pending" && (
										<div className='action-buttons'>
											<button
												className='accept-btn'
												onClick={() =>
													dispatch(
														updateCommande(el._id, {
															status: "Accepted",
														}),
													)
												}
											>
												✓
											</button>

											<button
												className='reject-btn'
												onClick={() =>
													dispatch(
														updateCommande(el._id, {
															status: "Rejected",
														}),
													)
												}
											>
												✕
											</button>
										</div>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ListCommandes;
