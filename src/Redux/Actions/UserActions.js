import {
	ALLUSERS,
	CURRENTUSER,
	EDITPROFILE,
	FAIL,
	LOGIN,
	LOGOUT,
	REGISTER,
} from "../ActionsTypes/UserTypes";
import axios from "axios";
import { handleError } from "./ErrorsActions";

const apiUrl = process.env.REACT_APP_API_URL;

export const register = (newUser, navigate) => async (dispatch) => {
	try {
		const res = await axios.post(`${apiUrl}/authUser/SignUp`, newUser);

		dispatch({
			type: REGISTER,
			payload: res.data,
		});
		navigate("/profile");
	} catch (error) {
		// dispatch({
		// 	type: FAIL,
		// 	payload: error.response.data.errors,
		// });

		error.response.data.errors.forEach((el) => {
			dispatch(handleError(el.msg));
		});
	}
};
export const login = (infoUser, navigate) => async (dispatch) => {
	try {
		const res = await axios.post(`${apiUrl}/authUser/SignIn`, infoUser);

		dispatch({
			type: LOGIN,
			payload: res.data,
		});
		navigate("/profile");
	} catch (error) {
		// dispatch({
		// 	type: FAIL,
		// 	payload: error.response.data.errors,
		// });
		error.response.data.errors.forEach((el) => {
			dispatch(handleError(el.msg));
		});
	}
};

export const currentUser = () => async (dispatch) => {
	try {
		const config = {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		};
		const res = await axios.get(`${apiUrl}/authUser/currentUser`, config);
		dispatch({
			type: CURRENTUSER,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: FAIL,
			payload: error.response.data.errors,
		});
	}
};
export const logOut = () => {
	return {
		type: LOGOUT,
	};
};

export const editProfile = () => async (dispatch) => {
	try {
		const config = {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		};

		const res = await axios.get(`${apiUrl}/authUser/currentUser`, config);
		dispatch({
			type: EDITPROFILE,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: FAIL,
			payload: error.response.data.errors,
		});
	}
};
export const updateProfile = (upProfile, navigate) => async (dispatch) => {
	try {
		console.log(upProfile);
		await axios.put(`${apiUrl}/authUser/UpdateProfile`, upProfile, {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		});

		dispatch(currentUser());
		navigate("/Profile");
	} catch (error) {
		dispatch({
			type: FAIL,
			payload: error.response.data.errors,
		});
	}
};
export const deleteProfile = (navigate) => async (dispatch) => {
	try {
		const config = {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		};

		await axios.delete(`${apiUrl}/authUser/DeleteProfile`, config);

		dispatch(logOut());

		navigate("/");
	} catch (error) {
		console.log(error.response);

		dispatch({
			type: FAIL,
			payload: error?.response?.data?.errors,
		});
	}
};
export const allUsers = () => async (dispatch) => {
	try {
		const res = await axios.get(`${apiUrl}/authUser/allUsers`);
		dispatch({
			type: ALLUSERS,
			payload: res.data.foundAll,
		});
	} catch (error) {
		dispatch({
			type: FAIL,
			payload: error?.response?.data?.errors,
		});
	}
};

export const deleteUser = (id) => async (dispatch) => {
	try {
		await axios.delete(`${apiUrl}/authUser/deleteUser/${id}`);

		dispatch(allUsers());
	} catch (error) {
		console.log(error.response);

		dispatch({
			type: FAIL,
			payload: error?.response?.data?.errors,
		});
	}
};
