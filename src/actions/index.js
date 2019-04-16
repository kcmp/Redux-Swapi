// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from "axios";

export const FETCH = "FETCH";
export const SUCCESSFUL_HUNT = "SUCCESSFUL_HUNT";
export const RETURNED_WITH_NOTHING = "RETURNED_WITH_NOTHING";

export const hunt = () => dispatch => {
  console.log("made it here");
  dispatch({ type: FETCH });
  axios
    .get(`https://swapi.co/api/people/`)
    .then(res => {
      console.log(res.data.results);
      dispatch({ type: SUCCESSFUL_HUNT, payload: res.data.results });
    })
    .catch(err => dispatch({ type: RETURNED_WITH_NOTHING, payload: err }));
};
