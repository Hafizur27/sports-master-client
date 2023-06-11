import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";

const MangeClass = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: allClass = [] } = useQuery(["allClass"], async () => {
    const res = await axiosSecure.get("/allClass");
    return res.data;
  });
  console.log(allClass[0]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allClass?.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <td>{index + 1}</td>
                <td></td>
                <td>{singleClass?.category}</td>
                <td>{singleClass?.name}</td>
                <td>{singleClass?.email}</td>
                <td>{singleClass?.seat}</td>
                <td>{singleClass?.price}</td>
                <td>
                  <button className="btn btn-xs">pending</button>
                  <button className="btn btn-xs">Approve</button>
                  <button className="btn btn-xs">Deny</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangeClass;
