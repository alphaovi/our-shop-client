import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Stock from "../../Pages/InStock/Stock";
import Pos from "../../Pages/POS/Pos";
import PageNotFound from "../../Shared/PageNotFound/PageNotFound";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/stock",
                element: <Stock></Stock>
            },
            {
                path: "/pos",
                element: <Pos></Pos>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>

            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    },
    {
        path: "*",
        element: <PageNotFound></PageNotFound>
    }
]);

export default router;