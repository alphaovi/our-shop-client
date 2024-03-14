import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../../assets/images/Login/Login-element.png";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Components/Contexts/AuthProvider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";


const Login = () => {
    const { googleSignIn, signInWithEmail, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInWithEmail(email, password)
        .then(result => {
            const currentUser = result.user;
            console.log(currentUser);
            setUser(currentUser);
            toast("Successfully Login");
            navigate("/");

        })
        .catch(error => {
            console.log(error);
        })
        // form.reset();
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div>
                            <div>
                                <p className="text-center text-2xl font-bold text-red-400 m-5">Login Here</p>
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="User name or email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-2">
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-lg text-white">Login</button>
                            <Link onClick={googleSignIn}>
                                <button className="btn btn-outline btn-primary text-lg text-white mt-6 w-full"><FaGoogle />
                                    Sign In With Google</button>
                            </Link>
                        </div>
                        <div>
                            <label className="label">
                                <Link className="label-text-alt link link-hover text-lg text-blue-600 font-bold w-full">Forgot password?</Link>
                            </label>
                            <Link to="/signup" className="label-text-alt link link-hover text-lg text-red-600 font-bold w-full"><h4>Not Registerd? Create an account</h4></Link>
                        </div>
                    </form>
                </div>

                <div className="text-center lg:text-left">
                    <img src={loginImage} alt="Login Image" />
                </div>


            </div>
        </div>
    );
};

export default Login;