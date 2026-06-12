import { GETALLCOMMANDES, GETMYCOMMANDES } from "../ActionsTypes/CommandeTypes";

const initialState = {
	commandes: [],
	myCommandes: [],
};

const CommandeReducer = (state = initialState, action) => {
	switch (action.type) {
		case GETALLCOMMANDES:
			return { ...state, commandes: action.payload };
		case GETMYCOMMANDES:
			return { ...state, myCommandes: action.payload };
		default:
			return state;
	}
};

export default CommandeReducer;
