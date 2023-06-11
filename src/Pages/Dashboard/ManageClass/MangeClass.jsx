import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const MangeClass = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: allClass = [], refetch } = useQuery(["allClass"], async () => {
    const res = await axiosSecure.get("/allClass");
    return res.data;
  });
  console.log(allClass);
  const handleApproveBtn = (data) => {
    axiosSecure.patch(`/addClass/approve/${data._id}`).then((res) => {
      console.log(res.data);
    });
  };

  const handleDenyBtn = (data) => {
    axiosSecure.patch(`/addClass/deny/${data._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Status deny",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(res.data);
    });
  };
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
              <th>Action</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {allClass?.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="avatar h-10 w-10 mask mask-squircle"
                    src={singleClass?.image}
                    alt=""
                  />
                </td>
                <td>{singleClass?.category}</td>
                <td>{singleClass?.name}</td>
                <td>{singleClass?.email}</td>
                <td>{singleClass?.seat}</td>
                <td>{singleClass?.price}</td>
                <td>{singleClass?.status}</td>
                <td>
                  {singleClass?.status !== 'approve' || singleClass?.status !== 'deny' ? (
                    <>
                      <button
                        onClick={() => handleApproveBtn(singleClass)}
                        className="btn btn-xs"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDenyBtn(singleClass)}
                        className="btn btn-xs"
                      >
                        Deny
                      </button>
                    </>
                  ) : (
                    <>
                      <button disabled className="btn btn-xs">
                        Approve
                      </button>
                      <button disabled className="btn btn-xs">
                        Deny
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs">FeedBack</button>
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
