// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from "axios";

export const FETCH = "FETCH";
export const SUCCESSFUL_SEARCH = "SUCCESSFUL_RETURN";
export const UNSUCCESSFUL_SEARCH = "UNSUCCESSFUL_RETURN";

export const search = () => dispatch => {
  console.log("made it");
  dispatch({ type: FETCH });
  axios
    .get(`https://swapi.co/api/people/`)
    .then(res => {
      console.log(res.data.results);
      dispatch({ type: SUCCESSFUL_SEARCH, payload: res.data.results });
    })
    .catch(err => dispatch({ type: UNSUCCESSFUL_SEARCH, payload: err }));
};