import axios from "axios";

export const FETCH_CATS_START = 'FETCH_CATS_START';
export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS';
export const FETCH_CATS_FAIL = 'FETCH_CATS_FAIL';


export const getCats = () => dispatch => {
    dispatch({type: FETCH_CATS_START});
    axios
    .get("https://cat-fact.herokuapp.com/facts")
    .then(res => {
        console.log(res);
        dispatch({type: FETCH_CATS_SUCCESS, payload: res.data.results})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: FETCH_CATS_FAIL, payload: err})
    })
}