import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import Login from "../Header/Login";
import Register from "../Header/Register";
import AddMarathon from "../DashBoard/Add Marathon/AddMarathon";
import PrivateRoute from "../Components/Auth/PrivateRoute";
import Details from "../Home/Details";
import MarathonReg from "../Home/MarathonReg";
import { details } from "../API/Details";
import AuthHook from "../Components/Hooks/AuthHook";
import ErrorPage from "../Components/Error.jsx/ErrorPage";
import Events from "../Home/Events";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params}) =>details(params.id)
      },
      {
        path:'/marathon-register/:id',
        element:<MarathonReg></MarathonReg>
      },
      {
        path:'/all-events',
        element:<PrivateRoute><Events></Events></PrivateRoute>
      }
      ],
  },
  
]);



