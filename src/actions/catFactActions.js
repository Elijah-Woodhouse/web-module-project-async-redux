import axios from 'axios';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getFacts = () => {
    return(
        dispatch => {
            dispatch({type: FETCH_START});
            axios.get('https://catfact.ninja/fact')
                .then(res => {
                    dispatch({type: FETCH_SUCCESS, payload: res.data})
            })
        });
}

export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = catData => {
    return({type: FETCH_SUCCESS, payload: catData})
}
