import axios from 'axios';

// ACTION CREATOR

export const fetchBook = (term) => {
    return async (dispatch) => {
        const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=12`);

        dispatch({
            type: 'FETCH_BOOK',
            payload: result.data
        });


        dispatch(selectBook(result.data.items[0]));

    };
};


export const selectBook = (book) => {
    return{
        type: 'SELECT_BOOK',
        payload: book
    }
}
