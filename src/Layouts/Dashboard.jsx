import { Link, Outlet } from "react-router-dom";
import useAdmin from "../components/hooks/useAdmin";
import useInstructor from "../components/hooks/useInstructor";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
         <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-yellow-200 text-base-content">
            {
                isAdmin? <>
                <li><Link to='/addClass'>Manage Classes</Link></li>
            <li><Link to='/dashboard/manageUser'>Manage Users</Link></li>

                </> : isInstructor? <>
                <li><Link to='/dashboard/addClass'>Add Class</Link></li>
            <li><Link to='/addClass'> My Classes</Link></li>

                </>: <>
                <li><Link to='/addClass'>My Selected Classes</Link></li>
            <li><Link to='/addClass'>My Enrolled Classes</Link></li>

                </>
            }
            
           
            
            
            
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;