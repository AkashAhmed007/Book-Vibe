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
            <NavLink to='/'><a>Home</a></NavLink>
            <NavLink to='/listedbooks'><a>Listed Books</a></NavLink>
            <NavLink to='/pagetoread'><a>Pages to read</a></NavLink>
            
        </ul>
        </div>
        <Link to='/' className="btn btn-ghost lg:text-2xl text-xl font-bold">Book Vibe</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
        
            <div className="flex gap-8 items-center justify-center">
            <NavLink to='/' className={({isActive})=>isActive ? 'text-green-600 border border-green-600 rounded-lg px-4 py-2':'font-base'}>Home</NavLink>
            <NavLink to='/listedbooks' className={({isActive})=>isActive ? 'text-green-600 border border-green-600 rounded-lg px-4 py-2':'font-base'}>Listed Books</NavLink>
            <NavLink to='/pagetoread' className={({isActive})=>isActive ? 'text-green-600 border border-green-600 rounded-lg px-4 py-2':'font-base'}>Pages to Read</NavLink>
            </div>
        
    </div>
    <div className="flex lg:gap-4 gap-2 navbar-end">
        <a className="btn text-white bg-[rgb(35,190,10)] lg:px-6 px-3 lg:py-2 py-1">Sign In</a>
        <a className="btn text-white bg-[rgb(89,198,210)] lg:px-5 px-2 lg:py-2 py-1">Sign Up</a>
    </div>
</div>
  )
}
