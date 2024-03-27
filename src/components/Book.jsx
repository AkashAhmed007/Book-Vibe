import { NavLink } from "react-router-dom";
import { CiStar } from "react-icons/ci";
export default function Book({book}) {
const{image,tags,bookName,author,category,rating,bookId}= book;

  return (
    <>
    <NavLink to ={`/book/${bookId}`}>
    <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 border-2xl p-5 m-5">
            <img src={image} alt="book"/>
        </figure>
        <div className="card-body">
            <div className="flex items-center gap-2">
            {
              tags.map(tag=>(<a className="text-green-600">{tag}</a>))
            }
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p>By: {author}</p>
            <p className="border-b mt-2"></p>
            <div className="flex">
              <p>{category}</p>
            <div className="flex justify-center items-center gap-2">
             <p>{rating}</p> 
             <CiStar />
            </div>
          </div>
        </div>
    </div>   
    </NavLink>
    
    </>
  )
}
