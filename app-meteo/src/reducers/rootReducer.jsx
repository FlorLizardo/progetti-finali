import { combineReducers } from "redux";

import fetchWeatherReducer from "./fetchWeatherReducer";
import errorReducer from "./alertErrorReducer";

const rootReducer = combineReducers({
  fetchWeather: fetchWeatherReducer,
  errorReducer: errorReducer
})

export default rootReducer