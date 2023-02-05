import { FETCH_START, FETCH_SUCCESS } from './../actions';

const initialState = {
    catData: [],
    loading: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_START":
            return{
                ...state, 
                loading: true,
                error: ""
            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                catData: action.payload,
                error: ""
            }
        default:
            return(state);
    }
}

export default reducer;
