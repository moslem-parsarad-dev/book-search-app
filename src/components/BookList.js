import React from "react";
import Book from "./Book";
import {useSelector} from 'react-redux';

const BookList = () => {
    const book = useSelector(state => state.books)
    const show = book.length === 0 ? <h1>Please search</h1> : book.items.map(bookInfo => <Book book={bookInfo} key={bookInfo.id}/>)


    return (
        <div className="book-container flex flex-wrap justify-center mx-5 w-[100vh]">{show}</div>
    )
}

export default BookList;
