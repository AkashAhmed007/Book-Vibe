import { useEffect, useState } from "react"
import { getDataFromLocalStore } from "../utilities/Utilities";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";

export default function ListedBooks() {
  const [listedBooks,setListedBooks] = useState([]);
  const [filterBooks,setFilterBooks] = useState([]);

  useEffect(()=>{
    const data = getDataFromLocalStore();
    setListedBooks(data);
  },[])
  const handleFilterBooks = filter =>{
    if(filter === 'rating'){
      const sortByRating = listedBooks.sort((a,b)=> parseFloat(b.rating) - parseFloat(a.rating));
      setFilterBooks(sortByRating);
    }else if(filter === 'pages'){
        const sortByPages = listedBooks.sort((a,b)=> parseFloat(b.totalPages) - parseFloat(a.totalPages));
        setFilterBooks(sortByPages);
      }else if (filter === 'year'){
        const sortByYear = listedBooks.sort((a,b)=> parseFloat(b.yearOfPublishing) - parseFloat(a.yearOfPublishing));
        setFilterBooks(sortByYear);
      }
}
  return (
    <div>
      <h1 className="text-center bg-gray-200 w-full p-8 font-bold text-2xl rounded-2xl">Books</h1>
      <div className="text-center mt-5">
        <div className="dropdown bg-[rgb(35,190,10)]">
          <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2  w-52">
            <li onClick={()=>handleFilterBooks('rating')}><a>Rating</a></li>
            <li onClick={()=>handleFilterBooks('pages')}><a>Number of Pages</a></li>
            <li onClick={()=>handleFilterBooks('year')}><a>Publisher Year</a></li>
          </ul>
      </div>
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
  listedBooks.map(book => (<div className="card card-side bg-base-100 shadow-xl border rounded-2xl m-2 p-2">
  <figure className="w-1/4"><img src={book.image} alt="Movie"/></figure>
    <div className="mt-12">
      <h2 className="card-title font-bold text-2xl mb-2 mt-2">{book.bookName}</h2>
      <p className="mb-2">By: {book.author}</p>
      <div className="flex justify-start w-96 mb-2">
        <p>{book.tags.map(tag=>(<a className="text-green-600 mr-1">#{tag}</a>))}</p>
        <p className="mb-2">Year of publishing: {book.yearOfPublishing}</p>
      </div>
      <div className="flex justify-start gap-3  w-96 mb-2">
        <div className="flex justify-center items-center gap-2">
          <IoPeopleSharp />
          <p>Publisher:{book.publisher}</p>
        </div  >
        <div className="flex justify-center items-center gap-2">
          <MdOutlineContactPage />
          <p>Page:{book.totalPages}</p>
        </div>
        
      </div>
      <p className="border-b m-2"></p>
      <div className="flex justify-start w-96 gap-3 mt-2">
        <p className="bg-[rgba(50,142,255,0.15)] text-[rgb(50,142,255)] rounded-full px-4 py-2">Category:{book.category}</p>
        <p className="bg-[rgba(255,172,51,0.15)]  rounded-full px-4 py-2 ">Rating:{book.rating}</p>
        <button className="btn rounded-full bg-[rgb(35,190,10)] text-white">View details</button>
      </div>
    </div>
</div>))
}
    
</div>
  )
}




