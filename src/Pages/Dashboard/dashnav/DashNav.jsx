
import { BiBell } from "react-icons/bi";
import { AiOutlineBars } from "react-icons/ai";
import dashpic from '../../../assets/picture/dashpic.png'
import downarrow from '../../../assets/picture/downarrow.png'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";

const DashNav = () => {
    const {user,logout } = useContext(AuthContext)

      //log out 
const handleLogout =()=>{
    logout()
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        console.log(error)
      });
  }
    return (
        <div className="bg-[#6078EA]">
           <div className="navbar p-4 ">
            <div className="navbar-start">
                <label htmlFor="my-drawer-2" className="btn btn-ghost btn-square drawer-button lg:hidden"><AiOutlineBars className="text-xl" /></label>
                <input type="text" placeholder="Search Dashboard" className="input input-bordered border-none py-1 bg-base-200  w-full" />
            </div>
            <div className="navbar-end gap-3">
               
                    <div className="indicator">
                        <BiBell className="text-xl text-white" />
                        <span className="badge badge-xs bg-orange-500 indicator-item"></span>
                    </div>
               
                
                <div className="btn-circle">
                    <img className="rounded-full" src={dashpic} alt="" />
                </div>

                <div className="flex gap-3 justify-center items-center">

                    <div className="flex flex-col gap-1">
                    <h1 className="text-white text-lg font-semibold tracking-tight">{user?.displayName}</h1>
                    <p className="text-white text-sm font-normal tracking-tight">Student</p>
                    </div>
{/* drop down */}

<div className="dropdown dropdown-hover">
  <label tabIndex={0} className=""><img src={downarrow} alt="" /></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li ><Link onClick={handleLogout} to="/">Log-out</Link></li>
   
  </ul>
</div>
                 
                </div>

            </div>
        </div>  
        </div>
    );
};

export default DashNav;