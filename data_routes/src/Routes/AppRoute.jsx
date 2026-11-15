import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import MainLayout from "../layout/MainLayout";
import SecondLayout from "../layout/SecondLayout";

const router = createBrowserRouter([
    {
      
        path:"/",
        element:<MainLayout />,
        children: [
             {
    path: "",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "services",
    element: <Services />,
  },
        ],
    

    },{
      path:"/SecondLayout",
      element:<SecondLayout />,
    },
 
]);

const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;