import { Link, useNavigate } from "react-router-dom";
import signUpImage from "../../../assets/images/Login/signup2.png";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Components/Contexts/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';


const SignUp = () => {

    const { googleSignIn, SignUpWithEmail } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        SignUpWithEmail(email, password)
            .then(result => {
                const currentUser = result.user;
                console.log(currentUser);
                updateProfile(currentUser, {
                    displayName: name,
                })

                    .then(() => {
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                toast("user created successfully");
                navigate("/");

            })
            .catch((error) => {
                console.log(error.message);
            })

        // form.reset();
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="text-center lg:text-left">
                    <img src={signUpImage} alt="Login Image" />
                </div>


                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div>
                            <div>
                                <p className="text-center text-2xl font-bold text-lime-400 m-5">Registration Form</p>
                            </div>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-2">
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-red-400 text-lg text-white">Register</button>
                            <Link onClick={googleSignIn}>
                                <button className="btn btn-outline btn-primary text-lg text-white mt-6 w-full"><FaGoogle />
                                    Sign In With Google</button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/login" className="label-text-alt link link-hover text-blue-600 text-lg font-bold w-full"><h4>Already have an account? Login</h4></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;