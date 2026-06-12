import axios from "axios";
import { GETALLCOMMANDES, GETMYCOMMANDES } from "../ActionsTypes/CommandeTypes";

const apiUrl = process.env.REACT_APP_API_URL;

export const getAllCommandes = () => async (dispatch) => {
	try {
		const res = await axios.get(`${apiUrl}/commande/GetAllCommandes`);

		dispatch({
			type: GETALLCOMMANDES,
			payload: res.data.commandes,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getMyCommandes = () => async (dispatch) => {
	try {
		const config = {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		};

		const res = await axios.get(`${apiUrl}/commande/GetMyCommandes`, config);

		dispatch({
			type: GETMYCOMMANDES,
			payload: res.data.commandes,
		});
	} catch (error) {
		console.log(error);
	}
};
export const addCommand = (newCommmande, navigate) => async (dispatch) => {
	try {
		await axios.post(`${apiUrl}/commande/AddCommande`, newCommmande, {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		});

		dispatch(getMyCommandes());

		navigate("/ListMyCommandes");
	} catch (error) {
		console.log(error);
	}
};

// export const getOneContact=(id)=>async(dispatch)=>{
//     try {
//        const res = await axios.get(`/Contact/GetOneContact/${id}`)

//        dispatch(
//         {
//             type : GETONECONTACT,
//             payload : res.data.contact
//         }
//        )
//     } catch (error) {
//         console.log(error)
//     }
// }

export const updateCommande = (id, upCommande) => async (dispatch) => {
	try {
		console.log(id);
		await axios.put(`${apiUrl}/commande/UpdateCommande/${id}`, upCommande);

		dispatch(getAllCommandes());
	} catch (error) {
		console.log(error);
	}
};

export const deleteCommande = (id) => async (dispatch) => {
	try {
		await axios.delete(`${apiUrl}/commande/DeleteCommande/${id}`);

		dispatch(getMyCommandes());
	} catch (error) {
		console.log(error);
	}
};
