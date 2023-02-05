import axios from 'axios';
export const FETCH_JOKES = "FETCH_JOKES";
export const JOKE_SUCCESS = "JOKE_SUCCESS";


export const getJokes = () => {
    return(
        dispatch => {
            dispatch({type: FETCH_JOKES});
            axios.get("https://official-joke-api.appspot.com/random_ten")
                .then(res => {
                    console.log(res.data);
                    dispatch({type: FETCH_JOKES, payload: res.data});
                })
        }
    )
}


export const jokeSuccess = catData => {
    return({type: JOKE_SUCCESS, payload: jokes})
}