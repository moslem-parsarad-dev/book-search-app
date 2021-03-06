import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { selectBook } from "../redux/action";
import bookImage from "./images/book.jpg"
// props.book.volumeInfo.imageLinks.smallThumbnail === undefined ? bookImage : props.book.volumeInfo.imageLinks.smallThumbnail
// props.book.volumeInfo.imageLinks.title === undefined ? 'a image' : props.book.volumeInfo.imageLinks.title
// props.book.volumeInfo.title
const Book = (props) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(selectBook(props.book))
    }

    console.log(props.book.volumeInfo.imageLinks === undefined);

    return (
        <div onClick={onClick}
             className="bg-white font-semibold text-center rounded-3xl shadow-lg p-10 m-5 book-card-glass">
            <img
                className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto hover:brightness-90 cursor-pointer"
                src={props.book.volumeInfo.imageLinks === undefined ? bookImage : props.book.volumeInfo.imageLinks.smallThumbnail}
                alt={props.book.volumeInfo.imageLinks === undefined ? 'a image' : props.book.volumeInfo.imageLinks.title}
            />
            <h1 className="text-lg text-gray-100">{props.book.volumeInfo.title}</h1>
        </div>
    )
}


export default Book;
