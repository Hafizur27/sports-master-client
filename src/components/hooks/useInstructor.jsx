import { useQuery } from "@tanstack/react-query";
import UseAuth from "../UseAuth/UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const useInstructor = () => {
    const {user, loading} = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            return res.data.admin;
        }
    })
    return [isInstructor, isInstructorLoading];
};

export default useInstructor;