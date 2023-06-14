import { NavLink, Outlet, useLocation } from "react-router-dom";
import useAdmin from "../components/hooks/useAdmin";
import useInstructor from "../components/hooks/useInstructor";
import { BiSelectMultiple } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCartCheck } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaHome, FaUser } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdManageAccounts, MdWorkHistory } from "react-icons/md";
import { AiFillControl, AiFillFolderAdd } from "react-icons/ai";
import UseAuth from "../components/UseAuth/UseAuth";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { Helmet } from "react-helmet-async";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Dashboard = () => {
  const location = useLocation();
  const route = location.pathname
  
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const {user} = UseAuth();

  return (
   <div>
    {
      route? <div>
      <Helmet>
        <title>My | Dashboard</title>
      </Helmet>
      <NavBar></NavBar>
      <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-slate-200 overflow-x-auto">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary bg-orange-500 border-none drawer-button lg:hidden"
        >
          <LuLayoutDashboard></LuLayoutDashboard>Dashboard
        </label>
      </div>
      <div className="drawer-side bg-yellow-200">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 h-full  text-base-content">
          <div className="">
            <img className="w-10 rounded-full " src={user?.photoURL} alt="" />
            <h3 className="my-2"> <span className="font-bold">Name:- </span> {user?.displayName}</h3>
            <p className=""> <span className="font-bold">Email:-</span> {user?.email}</p>
          </div>

          <div className="divider"></div>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageClass">
                  <AiFillControl></AiFillControl> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUser">
                  <MdManageAccounts></MdManageAccounts> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/addClass"><AiFillFolderAdd></AiFillFolderAdd> Add Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClass"><MdWorkHistory></MdWorkHistory> My Classes</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/selectClass">
                  <BiSelectMultiple></BiSelectMultiple> Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrollClass">
                  <BsCartCheck></BsCartCheck> Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <RiSecurePaymentLine></RiSecurePaymentLine> Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <FaUser></FaUser> Instructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <SiGoogleclassroom></SiGoogleclassroom> Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-">
    <Footer></Footer>
    </div>
    </div> : <ErrorPage></ErrorPage>
    }
     
   </div>
  );
};

export default Dashboard;
