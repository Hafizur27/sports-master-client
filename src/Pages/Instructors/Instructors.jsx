import { Helmet } from "react-helmet-async";
import UseAxiosSecure from "../../components/hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Instructor from "./Instructor";

const Instructors = () => {
  const [axiosSecure] = UseAxiosSecure();
    const { data: users = [] } = useQuery(["users"], async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    });

    const instructors = users.filter(user => user?.role === 'instructor')
  return (
    <div>
      <Helmet>
        <title>Instructors</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-12">
        {
          instructors?.map(instructor => <Instructor key={instructor._id} instructor={instructor}></Instructor>)
        }
      </div>
    </div>
  );
};

export default Instructors;
