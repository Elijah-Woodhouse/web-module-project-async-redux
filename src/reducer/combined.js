import { combineReducers } from "redux";
import reducer from './index'
import jokeReducer from './jokeReducer'

export const rootReducer = combineReducers({
    cats: reducer,
    joking: jokeReducer
})