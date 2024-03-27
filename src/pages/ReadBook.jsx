import { useEffect, useState } from "react";
import {getDataFromLocalStore} from '../utilities/Utilities'
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function ReadBook() {
    const [readBooks,setReadBooks] = useState([]) ;
    useEffect(()=>{
        const data = getDataFromLocalStore();
        setReadBooks(data);
    },[])
  return (
    <div className="m-5">
        {
    readBooks.map(book => (<div className="card card-side bg-base-100 shadow-xl border rounded-2xl m-2 p-2">
    <figure className="w-1/4 mr-5"><img src={book.image} alt="Movie"/></figure>
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
        <div className="flex justify-start w-96 gap-3 mt-5">
            <p className="bg-[rgba(50,142,255,0.15)] text-[rgb(50,142,255)] rounded-full px-4 py-2">Category:{book.category}</p>
            <p className="bg-[rgba(255,172,51,0.15)]  rounded-full px-4 py-2 ">Rating:{book.rating}</p>
            <NavLink to ={`/book/${book.bookId}`} className="btn rounded-full bg-[rgb(35,190,10)] text-white">View details</NavLink>
        </div>
        </div>
        </div>
))
}
 
    </div>
  )
}
