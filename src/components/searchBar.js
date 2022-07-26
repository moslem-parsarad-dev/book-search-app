import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBook } from "../redux/action";

const SearchBar = () => {
    const [inputText, setInputText] = useState('react');
    const dispatch = useDispatch();


    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchBook(inputText))
    }


    useEffect(() => {
        dispatch(fetchBook('react'));
    }, [dispatch]);

    return (
        <div className="search-bar-container mt-3">
            <form
                className="w-[100%] flex justify-center items-center"
                onSubmit={onFormSubmit}
            >
                <input
                    placeholder="search book"
                    className="p-3 rounded-md input-glass text-gray-50 w-[50%] placeholder-[#d3d3d3] focus:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                    onChange={(e) => setInputText(e.target.value)}
                    value={inputText}
                />
            </form>
        </div>
    )
};

export default SearchBar;