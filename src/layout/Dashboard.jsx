import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome,  AiOutlineAlignLeft, AiOutlineBars } from "react-icons/ai";
import {  BiLogOut } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import DashNav from "../Pages/Dashboard/dashnav/DashNav";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
    const {logout } = useContext(AuthContext)

    //log out 
const handleLogout =()=>{
  logout()
  .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
    });
}
    const activeClass = "text-white bg-blue-700 shadow-lg py-2 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-200 shadow-blue-300 duration-300 focus:bg-blue-700";
    const inactiveClass = "py-2 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-200 shadow-blue-300 duration-300 focus:bg-blue-700";
    return (
        <>
          <div className="font-poppins container mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    {/* *********************************************************************************************
                                                            Page content here 
                    ***********************************************************************************************/}
                    <div className="w-full">
                        <DashNav></DashNav>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side  ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay bg-black"></label>
                    <ul className="menu flex-nowrap py-6 px-4 w-52 h-full space-y-2 text-base-content bg-gradient-to-bl from-blue-500 to-purple-600">
                        {/* ******************************************************************************************
                                                         Sidebar content here 
                        *********************************************************************************************/}
                      

                        <div className="flex gap-5  items-center justify-center">
      <div className="w-6 h-6  -rotate-45 bg-white rounded" />
  <div className="text-white text-2xl font-bold leading-loose">Job Task</div>
  <label htmlFor="my-drawer-2"><AiOutlineAlignLeft className="text-white"></AiOutlineAlignLeft></label>
  
  </div>

                       
                        
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <AiOutlineHome />
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="courses"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <AiOutlineBars></AiOutlineBars>
                                Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="account"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <VscAccount />
                                Account
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleLogout}
                                to="/"
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                                <BiLogOut />
                                Logout
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>  
        </>
    );
};

export default Dashboard;