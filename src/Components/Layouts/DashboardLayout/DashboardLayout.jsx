import Dashboard from "../../../Pages/Dashboard/Dashboard";
import Navbar from "../../../Shared/Navbar/Navbar";

const DashboardLayout = () => {
    return (
        <div className="m-10">
            <Navbar></Navbar>
            <Dashboard></Dashboard>
        </div>
    );
};

export default DashboardLayout;