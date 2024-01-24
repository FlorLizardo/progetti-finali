import { SET_AZIENDA, REMOVE_AZIENDA } from "../actions/favouriteActions";

const initialState = {
	nomeAzienda: [],
};

const favouriteReducer = (state = initialState, action) => {
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
