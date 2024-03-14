import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-9xl font-bold text-red-600">404!!!</h1>
                    <p className="mb-5 text-5xl font-bold">Page Not Found.</p>
                    <Link to="/"><button className="btn btn-primary mt-20 font-bold text-white">Click me & Lets buy something</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;