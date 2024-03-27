import { useLoaderData, useParams } from "react-router-dom"
import { saveToLocalStorage } from "../utilities/Utilities";
export default function BookDetailsPage() { 
    const books = useLoaderData();
    const {bookId} = useParams();
    const singleBook = books.find(b => b.bookId == bookId);
    const {image,author,bookName,category,review,tags,rating,publisher,totalPages,yearOfPublishing}=singleBook;

    const handleReadbutton =()=>{
        saveToLocalStorage(singleBook);
    }
return (
    <div className="hero bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm w-1/3 rounded-lg shadow-2xl mr-5" />
        <div>
        <h1 className="text-5xl font-bold mb-2">{bookName}</h1>
        <p className="mb-2">By: {author}</p>
        <p className="border-b"></p>
        <p>{category}</p>
        <p className="border-b"></p>
        <p className="py-2">Review: {review}</p>
        <p>Tags :{
            tags.map(tag=>(<a className="text-green-600">#{tag}</a>))
        }</p>
        <p className="mb-2"></p>
        <p className="mb-2">Number of pages: {totalPages}</p>
        <p className="mb-2">Publisher: {publisher} </p>
        <p className="mb-2">Year of Publishing: {yearOfPublishing}</p>
        <p className="mb-2">Rating: {rating}</p>
        <button onClick={handleReadbutton}className="btn border-gray-400 border-2  mr-3 px-6 py-2 rounded-xl">Read</button>
        <button className="btn btn-accent">Wishlist</button>
        </div>
    </div>
    
</div>
  )
}

