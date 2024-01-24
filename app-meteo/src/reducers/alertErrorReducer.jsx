import { IS_ERROR } from "../actions/alertErrorActions"

const initialState = {
  isError: false
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_ERROR:
      return {
        ...state,
        isError: action.payload
      }
    default:
      return state
  }
}

export default errorReducer