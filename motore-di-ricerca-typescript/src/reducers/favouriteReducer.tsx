import { SET_AZIENDA, REMOVE_AZIENDA } from "../actions/favouriteActions";

type NameAzienda = {
	nomeAzienda: string[];
}

type Action = {
	type: string;
	payload: string;
}

//inizializzo lo stato
const initialState: NameAzienda = {
	nomeAzienda: [],
};

//stabilisco i casi per ogni action
const favouriteReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case SET_AZIENDA: 
			return {
				...state,
				nomeAzienda: [...state.nomeAzienda, action.payload],
			}
			case REMOVE_AZIENDA:
				return {
					...state,
					nomeAzienda: state.nomeAzienda.filter((fav) => fav !== action.payload)
				}
		default:
			return state;
	}
};

export default favouriteReducer;
