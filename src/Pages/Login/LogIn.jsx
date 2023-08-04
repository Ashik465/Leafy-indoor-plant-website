
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {  useContext, useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
// import { AuthContext } from "../../provider/AuthProvider";

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
  const {signInEmailUser} = useContext(AuthContext)
  // eslint-disable-next-line no-unused-vars
  const [error ,setError] =useState('')
  const navigate = useNavigate()
  //react-hook-form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {console.log(data);
  
    
  // email and password login
  
  signInEmailUser(data.email, data.password)
  .then((result)=>{
    const loggedUser = result.user;
    console.log(loggedUser);
    // setLoader(false)

    navigate("/signup")
  })
  .catch((err)=>{
    console.log(err)
    setError(err.message)
    // setLoader(false)
    
  })

  
  }
    return (
        <>  <h1 className=" text-center mt-14 mb-5 text-zinc-800 text-3xl md:text-5xl font-semibold leading-10">Welcome To Task Job</h1>
           <div className="w-screen h-screen flex-col text-center justify-center items-center gap-20 inline-flex">
            {/* from start */}

            <div className="card rounded-none w-full max-w-4xl ">
   
   <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
   {error &&  <p className='mb-3 text-red-600'> {error}  </p>}
   
     <div className="form-control">
       <label className="label">
         <span className="label-text text-zinc-800 text-2xl font-medium">Email Address*</span>
       </label>
       <input type="text" placeholder="Enter Email Address" {...register("email", { required: true, maxLength: 20 })} className="input input-bordered" />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text text-zinc-800 text-2xl font-medium">Password*</span>
       </label>
       <div className=" relative">
       <input type={showPassword? "text": "password"} placeholder="password" {...register("password", { required: true, maxLength: 20 })} className="input input-bordered w-full" />
       <button onClick={(e)=>{
          e.preventDefault();
         setShowPassword(!showPassword)}} className="btn bg-white text-slate-500  absolute top-0 right-0 rounded-l-none hover:bg-white border-l-0"> {showPassword  ?  <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }  </button>
       </div>
       <label className="label">
         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
       </label>
     </div>
     <div className="form-control mt-6">
       
       <input type="submit" className="btn  normal-case  rounded-lg bg-[#6078EA] text-white hover:bg-blue-500"  value="Log In" />
     </div>
     <p className="text-sm font-light text-black">
     Don’t Have An Account?{" "}
             <Link
               to="/signup"
            
               className="font-medium link text-indigo-500 
               hover:text-red-500 "
             >
               Register Now
             </Link>
           </p>
           
   </form>
  
 </div>

            {/*end */}
  
</div>
        </>
    );
};

export default LogIn;