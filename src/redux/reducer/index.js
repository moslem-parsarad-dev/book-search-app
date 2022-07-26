import { combineReducers } from "redux";

// PURE FUNCTION

const bookReducer = (state = [], action) => {
    switch (action.type){
        case 'FETCH_BOOK':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}


const bookSelectReducer = (state = null, action) => {
    switch (action.type){
        case 'SELECT_BOOK':
            return action.payload
        default:
            return state
    }
}


export default combineReducers({
    books: bookReducer,
    bookSelect: bookSelectReducer
});

