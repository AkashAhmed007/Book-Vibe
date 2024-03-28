import { Link, useRouteError } from "react-router-dom"

export default function ErroPage() {
    const errorPage = useRouteError();
  return (
    <div className="bg-gray-400 text-center w-10/12 h-52 mx-auto rounded-2xl p-10">
        <p className="text-white font-bold text-2xl mb-3">Page {errorPage.statusText || errorPage.message}</p>
        {
            errorPage.status === 404 && <div>
                <p className="text-white font-bold mb-3">Go back where you from</p>
                <Link to='/'><button className="btn btn-warning">Home</button></Link>
            </div>
        }
    </div>
  )
}
