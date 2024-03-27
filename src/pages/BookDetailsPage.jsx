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
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm w-full rounded-lg shadow-2xl" />
        <div>
        <h1 className="text-5xl font-bold">{bookName}</h1>
        <p>By: {author}</p>
        <hr />
        <p>{category}</p>
        <hr />
        <p className="py-6">Review: {review}</p>
        <p>Tags :{
            tags.map(tag=>(<a className="text-green-600">#{tag}</a>))
        }</p>
        <hr />
        <p>Number of pages: {totalPages}</p>
        <p>Publisher: {publisher} </p>
        <p>Year of Publishing: {yearOfPublishing}</p>
        <p>Rating: {rating}</p>
        <button onClick={handleReadbutton}className="btn btn-primary">Read</button>
        <button className="btn btn-primary">Wishlist</button>
        </div>
    </div>
    
</div>
  )
}

