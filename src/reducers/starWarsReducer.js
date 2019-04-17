import { FETCH, SUCCESSFUL_SEARCH, UNSUCCESSFUL_SEARCH } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
};



function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case SUCCESSFUL_SEARCH:
      return {
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload]
      };
    case UNSUCCESSFUL_SEARCH:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;