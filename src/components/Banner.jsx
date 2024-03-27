import { NavLink } from "react-router-dom";

export default function Banner() {
  
  return (
    <div className="hero lg:max-h-screen bg-base-200 p-10 rounded-2xl">
    <div className="hero-content flex-col lg:flex-row-reverse justify-between lg:gap-12 gap-8">
        <img src='https://i.ibb.co/L6BZRqk/book1.png' className="lg:max-w-sm rounded-lg" />
        <div>
        <p className="lg:text-5xl text-2xl font-bold lg:py-6 py-3 lg:leading-relaxed">Books to freshen up <br />
        your bookShelf </p>
        <NavLink to='/listedbooks' className="btn text-white bg-[rgb(35,190,10)]">View The List</NavLink>
        </div>
    </div>
    </div>
  )
}
