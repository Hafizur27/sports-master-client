import { useQuery } from "@tanstack/react-query";
import UseAuth from "../UseAuth/UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const useSelectClass = () => {

    const {user, loading} = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    const {data: allClass = [], refetch} = useQuery({
        queryKey: ['selectClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get("/selectClass")
            return res.data;
        }
    })

    return [allClass, refetch]
};

export default useSelectClass;