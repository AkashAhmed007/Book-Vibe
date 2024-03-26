import { useEffect, useState } from "react"
import { getDataFromLocalStore } from "../utilities/Utilities";

export default function ListedBooks() {
  const [listedBooks,setListedBooks] = useState([]);
  useEffect(()=>{
    const data = getDataFromLocalStore();
    setListedBooks(data);
  },[])
  return (
    <div>
      <h1 className="text-center bg-gray-200 w-full p-8 font-bold text-2xl rounded-2xl">Books</h1>
      <div className="text-center mt-5">
        <select className="select bg-[rgb(35,190,10)]">
          <option disabled selected className="text-white">Sort By</option>
          <option>Rating</option>
          <option>Number of Pages</option>
          <option>Published Year</option>
        </select>
      </div>
    <div className="flex space-y-4 mb-4">
      <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>Read Books</span>
      </a>
      <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span>Wishlist Books</span>
      </a>
    </div>

{
  listedBooks.map(book => (<div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-1/2" src={book.image} alt="Movie"/></figure>
    <div className="card-body">
      <h2 className="card-title">{book.bookName}</h2>
      <p>By: {book.author}</p>
      <p>{book.tags.map(tag=>(<a className="text-green-600">#{tag}</a>))}</p>
      <p>Year of publishing: {book.yearOfPublishing}</p>
      <p>Publisher:{book.publisher}</p>
      <p>Page:{book.totalPages}</p>
      <p>Category:{book.category}</p>
      <p>Rating:{book.rating}</p>
      <div className="card-actions">
        <button className="btn btn-primary">Watch</button>
      </div>
    </div>
</div>))
}
    
</div>
  )
}
