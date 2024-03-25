import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Listed Books</a></li>
            <li><a>Pages to read</a></li>
            
        </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-2xl font-bold">Book Vibe</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
        
            <div className="flex gap-8 items-center justify-center">
            <NavLink to='/' className={({isActive})=>isActive ? 'text-green-600 border border-green-600 rounded-lg px-4 py-2':'font-base'}>Home</NavLink>
            <NavLink to='/listedbooks' className={({isActive})=>isActive ? 'text-green-600 border border-green-600 rounded-lg px-4 py-2':'font-base'}>Listed Books</NavLink>
            <NavLink to='/pagetoread' className={({isActive})=>isActive ? 'text-green-600 border border-green-600 rounded-lg px-4 py-2':'font-base'}>Pages to Read</NavLink>
            </div>
        
    </div>
    <div className="flex gap-4 navbar-end">
        <a className="btn text-white bg-[rgb(35,190,10)] px-6 py-2">Sign In</a>
        <a className="btn text-white bg-[rgb(89,198,210)] px-5 py-2">Sign Up</a>
    </div>
</div>
  )
}
