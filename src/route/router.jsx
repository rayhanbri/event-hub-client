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
import { details } from "../API/data_hook.js";
import AuthHook from "../Components/Hooks/AuthHook";
import ErrorPage from "../Components/Error.jsx/ErrorPage";
import Events from "../Home/Events";
import EventReg from "../Home/EventReg";
import MyEvent from "../Home/MyEvent";
import Profile from "../Home/Profile";


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
        path:'/event-register/:id',
        element:<EventReg></EventReg>
      },
      {
        path:'/all-events',
        element:<PrivateRoute><Events></Events></PrivateRoute>
      },
      {
        path:'/my-event',
        element:<PrivateRoute><MyEvent></MyEvent></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/add-event',
        element:<PrivateRoute><AddMarathon></AddMarathon></PrivateRoute>
      },
      ],
  },
  
]);



