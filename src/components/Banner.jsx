import { NavLink } from "react-router-dom";

export default function Banner() {
  
  return (
    <div className="hero max-h-screen bg-base-200 p-10 rounded-2xl">
    <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-12">
        <img src='https://i.ibb.co/L6BZRqk/book1.png' className="max-w-sm rounded-lg" />
        <div>
        <p className="text-5xl font-bold py-6 leading-relaxed">Books to freshen up <br />
        your bookShelf </p>
        <NavLink to='/listedbooks' className="btn text-white bg-[rgb(35,190,10)]">View The List</NavLink>
        </div>
    </div>
    </div>
  )
}
