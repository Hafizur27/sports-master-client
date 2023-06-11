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

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'addClass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myClass',
          element: <MyClass></MyClass>
        },
        {
          path: 'manageUser',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'manageClass',
          element: <MangeClass></MangeClass>
        },
      
        {
          path: 'selectClass',
          element: <SelectClass></SelectClass>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'enrollClass',
          element: <EnrollClass></EnrollClass>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        }
        
      ]
    }
  ]);