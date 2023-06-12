import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../components/hooks/useAdmin";
import useInstructor from "../components/hooks/useInstructor";
import { BiSelectMultiple } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCartCheck } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaHome, FaUser } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-slate-200">
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
        <ul className="menu p-4 w-80 h-full  text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageClass">Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUser">Manage Users</NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/addClass">Add Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClass"> My Classes</NavLink>
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
  );
};

export default Dashboard;
