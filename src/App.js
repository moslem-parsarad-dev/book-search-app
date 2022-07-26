import React from "react";

import SearchBar from "./components/searchBar";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="app-container flex flex-col">
            <div>
                <SearchBar/>
            </div>
            <div className="flex flex-wrap xl:flex-row
            lg:flex-row md:flex-col-reverse sm:flex-col-reverse">
                <BookList/>
                <BookDetails/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default App;