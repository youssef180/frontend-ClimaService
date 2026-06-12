import {
	ALLUSERS,
	CURRENTUSER,
	EDITPROFILE,
	FAIL,
	LOGIN,
	LOGOUT,
	REGISTER,
} from "../ActionsTypes/UserTypes";

const initialState = {
	user: {},
	errors: [],
	edited: {},
	everyUser: [],
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case FAIL:
			return { ...state, errors: action.payload };
		case REGISTER:
			localStorage.setItem("token", action.payload.token);
			return { ...state, user: action.payload.newAccount, errors: [] };
		case LOGIN:
			localStorage.setItem("token", action.payload.token);
			return { ...state, user: action.payload.found, errors: [] };
		case CURRENTUSER:
			return { ...state, user: action.payload };
		case LOGOUT:
			localStorage.removeItem("token");
			return { ...state, user: {}, errors: [] };
		case EDITPROFILE:
			return { ...state, edited: action.payload };
		case ALLUSERS:
			return { ...state, everyUser: action.payload };
		default:
			return state;
	}
};

export default UserReducer;
