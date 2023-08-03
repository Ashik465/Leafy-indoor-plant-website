import { Outlet } from "react-router-dom";
import Navbar from "../Pages/navbar/Navbar";


const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className=" min-h-[calc(100vh-136px)]"><Outlet></Outlet></div>
        </>
    );
};

export default MainLayout;