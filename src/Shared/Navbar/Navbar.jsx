import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/Contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";


const Navbar = () => {

    const { user, logOut, setUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            setUser(null);
            toast("Successfully Logout");
            console.log("successfully logout")
        })
        .catch(err =>{
            console.log(err);
        })
    }


    const navItems = <>
        <li><Link to={"/dashboard"}>Dashboard</Link></li>
        <li><Link to={"/stock"}>In Stock</Link></li>
        <li><Link to={"/pos"}>POS (Sell)</Link></li>
        <li><Link to={"/stock"}>Stock Management</Link></li>
        {
            user ? <li><Link to={"/reports"}>Reports</Link></li> : ""
        }


    </>
    return (
        <div className="navbar bg-white min-h-0 p-0 text-lg text-black border border-gray-200 font-bold rounded-md">
            <div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu bg-blue-500 text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {navItems}
                    </ul>

                </div>
                <Link to="/" ><p className="text-orange-600 text-lg font-bold ml-4 flex">Nail <span className="text-gray-400 ml-2 mr-10">Hammer</span></p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
                {user ? <p className="text-red-400 text-sm">{user.displayName}</p> : ""}
            </div>
            <div className="navbar-end">
                {user ?
                    <Link onClick={handleLogOut} to="/login" className="btn btn-link no-underline hover:text-gray-600 text-black font-bold">Logout</Link>
                    :
                    <Link to="/login" className="btn btn-link no-underline hover:text-gray-600 text-black font-bold">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;