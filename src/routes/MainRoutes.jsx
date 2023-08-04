import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/signup/SignUp";
import Dashboard from "../layout/Dashboard";
import Home from "../Pages/Dashboard/home/Home";
import Courses from "../Pages/Dashboard/courses/Courses";
import Account from "../Pages/Dashboard/account/Account";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <LogIn></LogIn>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
      ],
    },

    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <Home></Home>,
          },
          {
            path: "courses",
            element: <Courses></Courses>
          },
          {
            path: "account",
            element: <Account></Account>
          },
         
          
        ]
      },
  ]);

  export default router;