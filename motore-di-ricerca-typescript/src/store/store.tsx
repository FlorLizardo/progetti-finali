import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../reducers/rootReducer";
 
//lo store per lo stato
const store = configureStore({
  reducer: rootReducer
})

export default store