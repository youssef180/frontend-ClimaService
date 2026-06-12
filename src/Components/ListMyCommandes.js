import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyCommandes } from "../Redux/Actions/CommandeActions";
import DeleteCommand from "./DeleteCommand";
import Form from "react-bootstrap/Form";

const ListMyCommandes = () => {
	const dispatch = useDispatch();

	const [statusFilter, setStatusFilter] = useState("All");

	useEffect(() => {
		dispatch(getMyCommandes());
	}, [dispatch]);

	const myCommandes =
		useSelector((state) => state.CommandeReducer.myCommandes) || [];

	const filtered = myCommandes.filter(
		(el) => statusFilter === "All" || el.status === statusFilter,
	);

	return (
		<div className='table-page'>
			<div className='table-header'>
				<h1>
					<span className='blue-text'>My</span>{" "}
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
							<th>Price</th>
							<th>Quantity</th>
							<th>Date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{filtered.map((el) => (
							<tr key={el._id}>
								<td className='product-cell'>
									<img src={el?.product?.image} alt='' />
									{el?.product?.title}
								</td>

								<td>{el.totalPrice} DT</td>

								<td>{el.qte}</td>

								<td>{new Date(el.time).toLocaleString("fr-FR")}</td>

								<td>
									<span className={`status-badge ${el.status.toLowerCase()}`}>
										{el.status}
									</span>
								</td>

								<td>
									{el.status === "Pending" && <DeleteCommand id={el._id} />}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ListMyCommandes;
