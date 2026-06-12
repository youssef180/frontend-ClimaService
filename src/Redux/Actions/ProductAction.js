import { GETALLPRODUCTS, GETONEPRODUCT } from "../ActionsTypes/ProductTypes";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllProducts = () => async (dispatch) => {
	try {
		const res = await axios.get(`${apiUrl}/product/GetAllProducts`);

		dispatch({
			type: GETALLPRODUCTS,
			payload: res.data.products,
		});
	} catch (error) {
		console.log(error);
	}
};

export const addProduct = (newProduct, navigate) => async (dispatch) => {
	try {
		await axios.post(`${apiUrl}/product/AddProduct`, newProduct);

		dispatch(getAllProducts());

		navigate("/ListProducts");
	} catch (error) {
		console.log(error);
	}
};

export const getOneProduct = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`${apiUrl}/product/GetOneProduct/${id}`);

		dispatch({
			type: GETONEPRODUCT,
			payload: res.data.product,
		});
	} catch (error) {
		console.log(error);
	}
};

export const updateProduct = (id, upProduct, navigate) => async (dispatch) => {
	try {
		await axios.put(`${apiUrl}/product/UpdateProduct/${id}`, upProduct);

		dispatch(getAllProducts());

		navigate(`/DescriptionProduct/${id}`);
	} catch (error) {
		console.log(error);
	}
};

export const deleteProduct = (id, navigate) => async (dispatch) => {
	try {
		await axios.delete(`${apiUrl}/product/DeleteProduct/${id}`);

		dispatch(getAllProducts());

		navigate("/ListProducts");
	} catch (error) {
		console.log(error);
	}
};
