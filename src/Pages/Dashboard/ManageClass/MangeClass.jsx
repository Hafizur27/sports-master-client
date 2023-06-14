import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { BiMessageEdit } from "react-icons/bi";
const MangeClass = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: allClass = [], refetch } = useQuery(["allClass"], async () => {
    const res = await axiosSecure.get("/manageClass");
    return res.data;
  });
  const handleApproveBtn = (data) => {
    axiosSecure.patch(`/addClass/approve/${data._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Approved Class",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDenyBtn = (data) => {
    axiosSecure.patch(`/addClass/deny/${data._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Denied Class",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

 
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead className="bg-black text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Seats</th>
              <th>Price $</th>
              <th>Status</th>
              <th >Approve</th>
              <th >Deny</th>
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
                <td>{singleClass?.coachName}</td>
                <td>{singleClass?.coachEmail}</td>
                <td className="text-center">{singleClass?.seat}</td>
                <td className="text-center">{singleClass?.price}</td>
                <td>{singleClass?.status}</td>

                {singleClass?.status !== "approve" &&
                singleClass?.status !== "deny" ? (
                  <>
                    <td className="">
                      <button
                        onClick={() => handleApproveBtn(singleClass)}
                        className="btn btn-xs font-thin bg-green-500 hover:bg-green-700 text-white text-xs"
                      >
                        Approve
                      </button>
                     
                    </td>
                    <td>
                    <button
                        onClick={() => handleDenyBtn(singleClass)}
                        className="btn btn-xs font-thin bg-red-500 hover:bg-red-700 text-white text-xs"
                      >
                        {" "}
                        Deny
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="flex gap-1">
                      <button className="btn btn-xs " disabled>
                        Approve
                      </button>
                      
                    </td>
                    <td><button className="btn btn-xs " disabled>
                        {" "}
                        Deny
                      </button></td>
                  </>
                )}

                <td>
                  
                    <Link to ='/dashboard/feedback' state={singleClass}><button className="btn btn-xs font-thin bg-yellow-500 hover:bg-yellow-700 text-white text-lg py-1 ml-3 ">
                      <BiMessageEdit></BiMessageEdit>
                    </button></Link>
                  
                  
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
