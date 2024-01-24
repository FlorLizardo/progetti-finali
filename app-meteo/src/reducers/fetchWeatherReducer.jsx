import { WEATHER } from "../actions/fetchWeatherActions";

const initialState = {
	fetchWeather: {},
};

const fetchWeatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case WEATHER:
			return {
				...state,
				fetchWeather: { ...state.fetchWeather, ...action.payload }, 
			};
		default:
			return state;
	}
};

export default fetchWeatherReducer;
