import { Helmet } from "react-helmet-async";
import UseAxiosSecure from "../../components/hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Class from "./Class";

const Classes = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/manageClass");
    return res.data;
  });

  const allClass = classes?.filter((data) => data?.status === "approve");
  return (
    <div className="my-12">
      <Helmet>
        <title>classes</title>
      </Helmet>
      <h2 className="text-3xl font-serif text-center mb-10 ">
        {" "}
        Class of <span className="text-yellow-500">Sports Master</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
        {allClass?.map((singleClass) => (
          <Class key={singleClass?._id} singleClass={singleClass}></Class>
        ))}
      </div>
    </div>
  );
};

export default Classes;
