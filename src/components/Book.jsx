import { NavLink } from "react-router-dom";
export default function Book({book}) {
const{image,tags,bookName,author,category,rating,bookId}= book;

  return (
    <>
    <NavLink to ={`/book/${bookId}`}>
        <div  className="card bg-base-100 border shadow-xl">
        <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl w-1/2" />
        </figure>
        <div className="flex items-center gap-3 mt-4 ml-8">
        {
            tags.map(tag=>(<a className="text-green-600">#{tag}</a>))
        }
        </div>
       
        <div className="card-body">
            <h2 className="card-title">{bookName}</h2>
            <p>By:{author}</p>
            <div className="flex justify-between">
                <p>{category}</p>
                <p>{rating}</p>
            </div>
        </div>
        </div>
        
    </NavLink>
    
    </>
  )
}
