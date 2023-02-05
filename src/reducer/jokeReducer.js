import { FETCH_JOKES } from '../actions/catFactActions';

const initialState = {
    jokes: [],
}

const jokeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_JOKES":
            return {
                ...state,
                jokes: action.payload,
            }
        default:
            return(state);
    }
}

export default jokeReducer;