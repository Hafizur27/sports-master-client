import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../components/UseAuth/UseAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to= '/logIn' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;