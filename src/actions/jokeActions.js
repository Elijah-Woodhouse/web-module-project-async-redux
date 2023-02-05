import axios from 'axios';
export const FETCH_JOKES = "FETCH_JOKES";


export const getJokes = () => {
    return(
        dispatch => {
            axios.get("https://official-joke-api.appspot.com/random_ten")
                .then(res => {
                    dispatch({type: FETCH_JOKES, payload: res.data});
             })
        });
}





export const fetchJokes = jokes => {
    return({type: FETCH_SUCCESS, payload: jokes})
}


