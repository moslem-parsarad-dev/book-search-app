import React from "react";
import {useSelector} from "react-redux";

const BookDetails = () => {


    const selectedBook = useSelector(state => state.bookSelect);


    const renderContent = () => {
        
        if (!selectedBook) {
            return <h1 className="text-white text-xl">Please Select Book</h1>;
        }
        return (

            <div className=" flex flex-col mx-auto mt-5 ">
          <span className="glass p-3 rounded-lg shadow-md md:flex-row md:max-w-xl">
          <div className="mt-3">
            <a
                href={selectedBook.volumeInfo.infoLink}
                className=" flex flex-col items-center "
            >
              <img
                  className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={selectedBook.volumeInfo.imageLinks.thumbnail === undefined ? "book.jpg" : selectedBook.volumeInfo.imageLinks.thumbnail}
                  alt={selectedBook.title}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {selectedBook.volumeInfo.title}
                </h5>
                <p className="mb-3 font-normal text-white">
                  {selectedBook.volumeInfo.subtitle}
                </p>
              </div>
            </a>
          </div>
          <p className="mb-3 font-normal text-white">
            description: {selectedBook.volumeInfo.description === undefined ? 'this is good book' : selectedBook.volumeInfo.description}
          </p>
          <hr/>
          <p className="mt-3 mb-3 font-normal text-white">
              authors: {selectedBook.volumeInfo.authors === undefined ? "somebody" : selectedBook.volumeInfo.authors[0]}
          </p>
          <hr/>
          <p className="mt-3 mb-3 font-normal text-white">
            category: {selectedBook.volumeInfo.categories === undefined ? "no category" : selectedBook.volumeInfo.categories[0]}
          </p>
          <hr/>
          <p className="mt-3 mb-3 font-normal text-white">
            Publish Date: {selectedBook.volumeInfo.publishedDate === undefined ? "Publish Date" : selectedBook.volumeInfo.publishedDate}
          </p>
              <hr/>
                  <button onClick={() => window.open(selectedBook.volumeInfo.infoLink)} href={selectedBook.volumeInfo.infoLink} target='_blank'
                     className='px-4 py-2 bg-transparent outline-none border-2 border-indigo-400 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200 mt-2'>Learn more</button>
          </span>
            </div>

        );
    };
    return (<div>
            {renderContent()}
        </div>
    )
};
export default BookDetails;
