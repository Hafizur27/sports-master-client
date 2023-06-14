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

  const instructors = users.filter((user) => user?.role === "instructor");
  return (
    <div className="my-12">
      <Helmet>
        <title>Instructors</title>
      </Helmet>
      <h3 className="text-4xl font-serif text-center mb-10 ">
        {" "}
        <span className="text-yellow-500">Explore</span> Our Instructor{" "}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {instructors?.map((instructor) => (
          <Instructor key={instructor._id} instructor={instructor}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
