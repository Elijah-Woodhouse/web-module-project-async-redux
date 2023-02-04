import data from './../data/catFact';

const initialState = {
    catData: data,
    loading: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return(state);
    }
}

export default reducer;
