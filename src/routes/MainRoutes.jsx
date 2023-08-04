import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/signup/SignUp";
import Dashboard from "../layout/Dashboard";

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
            // element: <Home></Home>
          },
          {
            path: "listings",
            // element: <Listings></Listings>
          },
          {
            path: "orders",
            // element: <Orders></Orders>
          },
          {
            path: "stats",
            // element: <Stats></Stats>
          },
          {
            path: "finances",
            // element: <Finances></Finances>
          },
          {
            path: "marketing",
            // element: <Marketing></Marketing>
          },
          {
            path: "integrations",
            // element: <Integrations></Integrations>
          },
          {
            path: "reports",
            // element: <Reports></Reports>
          },
          {
            path: "settings",
            // element: <Settings></Settings>
          },
          {
            path: "inbox",
            // element: <Inbox></Inbox>
          },
          {
            path: "notifications",
            // element: <Notifications></Notifications>
          }
        ]
      },
  ]);

  export default router;