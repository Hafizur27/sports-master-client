import { Helmet } from "react-helmet-async";
import UseAxiosSecure from "../../components/hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Class from "./Class";

const Classes = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: allClass = [] } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/allClass");
    return res.data;
  });
  return (
    <div>
      <Helmet>
        <title>classes</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
        {
          allClass?.map(singleClass => <Class key={singleClass?._id} singleClass={singleClass}></Class>)
        }
      </div>
    </div>
  );
};

export default Classes;
