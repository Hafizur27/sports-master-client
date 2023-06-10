import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../components/UseAuth/UseAuth";
import useInstructor from "../components/hooks/useInstructor";


const InstructorRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();
    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }
    if(!user && isInstructor){
        return children;
    }
    return <Navigate to= '/logIn' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;