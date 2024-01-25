import {combineReducers} from 'redux'
import favouriteReducer from './favouriteReducer'

//faccio un root reducer con tutti i reducers. In questo caso ho solo uno, ma lo lascio inizializzato se per caso dopo devo aggiungere altri reducers
const rootReducer = combineReducers({
  favourite: favouriteReducer
})

export default rootReducer