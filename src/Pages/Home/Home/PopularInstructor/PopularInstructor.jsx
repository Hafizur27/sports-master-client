import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../components/hooks/UseAxiosSecure";


const PopularInstructor = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { data: users = [] } = useQuery(["users"], async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    });

    const instructor = users.filter(user => user?.role === 'instructor')
    console.log(instructor)
    return (
        <div>
            popular instruction
        </div>
    );
};

export default PopularInstructor;