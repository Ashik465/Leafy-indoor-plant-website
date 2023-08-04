
import  React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/picture/signuplogo.png'
import { GiConfirmed } from "react-icons/gi";
import { AuthContext } from '../../provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const SignUp = () => {

    // email and password login
    const {createEmailUser,setUser}=useContext(AuthContext)
    // eslint-disable-next-line no-unused-vars
    const[error,setError] =useState('')
    const navigate = useNavigate();
    const location =useLocation()
    const auth =getAuth(app)
 const from = location?.state?.pathname || '/'


    const formArray = [1, 2, 3];
    const [formNo, setFormNo] = useState(formArray[0])
    const [state, setState] = useState({
      name: '',
      email: '',
      position: '',
      institute: '',
      educationLevel: '',
      workTime: '',
      password: '',
      ConfirmPassword: '',
      
      
    })
    const inputHandle = (e) => {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
    const next = () => {
      if (formNo === 1 && state.name && state.email && state.position && state.institute) {
        setFormNo(formNo + 1)
      }
      else if (formNo === 2 && state.password && state.ConfirmPassword ) {
        // setFormNo(formNo + 1)
         if (formNo === 2 && state.password == state.ConfirmPassword ) {
            setFormNo(formNo + 1)
          }  else {
            toast.error('new password and confirm password did not match')
          }
      }
       else {
        toast.error('Please fillup all input field')
      }
    }
    const pre = () => {
      setFormNo(formNo - 1)
    }
    const finalSubmit = () => {
        console.log(state)
      
        // toast.success('Account Created Successfully')
        const {name,email,password,photoURL} = state

        // start 
  
        createEmailUser(email,password,
            )
        .then((result) => {
           
            const loggedUser = result.user;
            updateProfile(auth.currentUser, {
             
             
              displayName:name , photoURL: photoURL
            }).then(() => {
              
              setUser(loggedUser => {
                const updatedLoggedUser = {...loggedUser}
                updatedLoggedUser.displayName = name ;
                updatedLoggedUser.photoURL = photoURL;
    
             return updatedLoggedUser 
              })
              // setLoader(true)
              // window.location.reload()
            }).catch((error) => {
              // An error occurred
                setError(error)
                console.log(error)
            });
           
            navigate(from, { replace: true });
            console.log(loggedUser)
            
            
          })
          .catch((error) => {
            console.log(error)
             setError(error.message) 
            
          });
    
          toast.success('Account Created Successfully')
    
    
      
        // end
      
       
     
    }

    const isActiveStep = (step) => formNo === step || formNo === step + 1;
    const info = ['Information','Security','Confirmation']
    return (
        <>
            <div className="w-screen h-screen bg-white flex justify-center items-center">
      <ToastContainer />
      <div className="card w-[570px]   bg-white p-5">
        <div className='flex justify-center items-center'>
          {
            // eslint-disable-next-line react/jsx-no-undef
            formArray.map((v, i) => <React.Fragment key={i}>
            <div  className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-indigo-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
              { formNo - 1 === i + 1 || formNo === formArray.length ? <GiConfirmed ></GiConfirmed> : v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-indigo-500' : 'bg-slate-400'}`}></div>
              }
              {
                 <div className={`w-[85px] h-[2px] hidden md:block ${formNo === i + 2 || formNo === formArray.length ? 'bg-indigo-500' : 'bg-slate-400'} ${formNo === i + 2 || formNo === formArray.length ? 'text-indigo-500' : 'text-slate-400'}`}  >{info[i]}</div>
              }
            </React.Fragment>)
          }
        </div>

        {
          formNo === 1 && <div>

      <h1 className="p-2 text-center text-zinc-800 text-3xl font-semibold leading-10">Personal Information</h1>
            <div className='flex flex-col mb-2'>
              <label htmlFor="name text-zinc-800 text-2xl font-medium">Full Name</label>
             
              <input value={state.name} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='name' placeholder='name' id='name' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="email text-zinc-800 text-2xl font-medium">Email Address</label>
            
             <input value={state.email} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="email" name='email' placeholder='email ' id='email' />
            </div>
            {/* position input */}
            <div className='flex flex-col mb-2'>
                            <label htmlFor="position">Position</label>
                            <select
                                value={state.position}
                                onChange={inputHandle}
                                className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                                name='position'
                            >
                                <option value=''>Select Position</option>
                                <option value='teacher'>Teacher</option>
                                <option value='student'>Student</option>
                            </select>
                        </div>
                        {/* Institute Input */}

                        <div className='flex flex-col mb-2'>
                            <label htmlFor="institute">Institute Name</label>
                            <select
                                value={state.institute}
                                onChange={inputHandle}
                                className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                                name='institute'
                            >
                                <option value=''>Select Institute</option>
                                <option value='Dhaka National Medical College'>Dhaka National Medical College</option>
                                <option value='Ibrahim Medical College'>Ibrahim Medical College</option>
                                <option value='Bangladesh Medical College'>Bangladesh Medical College</option>
                                <option value='Holy Family Red Crescent Medical College'>Holy Family Red Crescent Medical College</option>
                            </select>
                        </div>
                       

                        {/* Conditionally render Education Level or Work Time based on selected position */}
                        {isActiveStep(1) && state.position === 'teacher' && (
                            <div className='flex flex-col mb-2'>
                                <label htmlFor='workTime'>Work Time</label>
                                <select
                                    value={state.workTime}
                                    onChange={inputHandle}
                                    className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                                    name='workTime'
                                >
                                    <option value=''>Select Work Time</option>
                                    <option value='Full Time'>Full Time</option>
                                    <option value='Part Time'>Part Time</option>
                                </select>
                            </div>
                        )}
                        {isActiveStep(1) && state.position === 'student' && (
                            <div className='flex flex-col mb-2'>
                                <label htmlFor='educationLevel'>Education Level</label>
                                <select
                                    value={state.educationLevel}
                                    onChange={inputHandle}
                                    className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md'
                                    name='educationLevel'
                                >
                                    <option value=''>Select Education Level</option>
                                    <option value='SSC'>Secondary School Certificate (SSC)</option>
                                    <option value='HSC'>Higher Secondary School Certificate (HSC)</option>
                                    <option value='Diploma'>Diploma</option>
                                    <option value='BSC'>Bachelor of Science (BSC)</option>
                                    <option value='MA'>Master of Arts (MA)</option>
                                    <option value='BA'>Bachelor of Arts (BA)</option>
                                </select>
                            </div>
                        )}

            <div className='mt-4 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-indigo-500'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 2 && <div>
                  <h1 className="p-2 text-center text-zinc-800 text-3xl font-semibold leading-10">Security</h1>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="password">New password</label>
              <input value={state.password} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="password" name='password' placeholder='Enter New Password' id='password' />
              <label className='text-slate-500 text-sm' htmlFor="password">password should be at least 6 character</label>
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="ConfirmPassword">Confirm Password</label>
              <input value={state.ConfirmPassword} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="password" name='ConfirmPassword' placeholder='Retype-New-password' id='ConfirmPassword' />
            </div>
           
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 3 && <div>

            <div className='flex flex-col mb-2 items-center justify-center'>

                <img className='w-48 h-48 border-[#6078EA] border-opacity-50 rounded-full border-8' src={logo} alt="" />
                <h1 className="text-zinc-800 text-3xl font-semibold leading-10 tracking-tight">Thank You!</h1>
                <p className=" text-center text-neutral-400 text-2xl font-normal ">To create account please click submit button. Enjoy Job Task. </p>

            </div>
           
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
            </div>
          </div>
        }



<p className="text-sm font-light text-black text-center p-5">
     Already Have An Account?{" "}
             <Link
               to="/"
            
               className="font-medium link text-indigo-500 
               hover:text-red-500 "
             >
               Log In
             </Link>
           </p>

      </div>
    </div>
        </>
    );
};

export default SignUp;