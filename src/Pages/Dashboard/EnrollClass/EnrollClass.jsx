import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";
import { BiDollar} from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";

const EnrollClass = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: allClass = [] } = useQuery(["enroll"], async () => {
    const res = await axiosSecure.get("/payments");
    return res.data;
  });

  return (
    <>
    <Helmet>
        <title>Enroll | Class</title>
      </Helmet>
    <h3 className="text-xl font-bold w-full ml-16">My Enroll Class</h3>
    <div className="divider w-2/3 ml-8"></div>
      <div className="w-full">
        <div className="overflow-x-auto w-2/3 m-8">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Games</th>
                <th>Trainer</th>
                <th>Email</th>
                <th className="flex items-center justify-center ">price <FaDollarSign className=""></FaDollarSign></th>
              </tr>
            </thead>
            <tbody>
              {allClass?.map((data, index) => (
                <tr key={data._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="avatar mask mask-squircle w-10 h-10"
                      src={data?.image}
                      alt=""
                    />
                  </td>
                  <td>{data?.category}</td>
                  <td>{data?.coachName}</td>
                  <td>{data?.coachEmail}</td>
                  <td className="flex items-center mt-3 justify-center">{data?.price}<BiDollar className=" text-yellow-500"></BiDollar> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EnrollClass;
