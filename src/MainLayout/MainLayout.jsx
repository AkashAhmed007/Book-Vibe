import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function MainLayout() {
  return (
    <div className="w-10/12 mx-auto space-x-5 m-5">
        <div className="mb-5">
            <NavBar></NavBar>
        </div>
        <Outlet></Outlet>
    </div>
  )
}
