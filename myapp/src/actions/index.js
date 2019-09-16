import axios from "axios";

export const FETCH_DOGS_START = 'FETCH_DOGS_START';
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const FETCH_DOGS_FAIL = 'FETCH_DOGS_FAIL';


export const getDogs = () => dispatch => {
    dispatch({type: FETCH_DOGS_START});
    axios
    .get("https://dog.ceo/api/breed/beagle/images")
    .then(res => {
        console.log(res.data.message);
        dispatch({type: FETCH_DOGS_SUCCESS, payload: res.data.message})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: FETCH_DOGS_FAIL, payload: err})
    })
}