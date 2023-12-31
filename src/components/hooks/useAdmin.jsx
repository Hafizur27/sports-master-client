import { useQuery } from "@tanstack/react-query";
import UseAuth from "../UseAuth/UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const useAdmin = () => {
    const {user, loading} = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;