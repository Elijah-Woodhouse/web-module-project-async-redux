
const initialState = {
    jokes: [],
    loading: false,
    error: "",
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_START":
            return{
                ...state, 
                loading: true,
                error: ""
            }

        case "FETCH_JOKES":
            return {
                ...state,
                jokes: action.payload,
            }
        default:
            return(state);
    }
}