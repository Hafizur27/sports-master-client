import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import Dashboard from "../Layouts/Dashboard";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import MangeClass from "../Pages/Dashboard/ManageClass/MangeClass";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import SelectClass from "../Pages/Dashboard/SelectClass/SelectClass";
import EnrollClass from "../Pages/Dashboard/EnrollClass/EnrollClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Payment from "../Pages/Dashboard/Payment/Payment";
import FeedBack from "../Pages/Dashboard/ManageUsers/FeedBack/FeedBack";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'logIn',
          element: <LogIn></LogIn>
        }
       
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'addClass',
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'myClass',
          element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
        },
        {
          path: 'manageUser',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'manageClass',
          element: <AdminRoute><MangeClass></MangeClass></AdminRoute>
        },
        {
          path: 'feedback',
          element: <AdminRoute><FeedBack></FeedBack></AdminRoute>
        },
        {
          path: 'selectClass',
          element: <PrivateRoute><SelectClass></SelectClass></PrivateRoute>
        },
        {
          path: 'payment',
          element: <PrivateRoute><Payment></Payment></PrivateRoute>
        },
        {
          path: 'enrollClass',
          element: <PrivateRoute><EnrollClass></EnrollClass></PrivateRoute>
        },
        {
          path: 'paymentHistory',
          element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        }
        
      ]
    }
  ]);