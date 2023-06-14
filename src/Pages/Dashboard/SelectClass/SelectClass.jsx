import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
import useSelectClass from "../../../components/hooks/useSelectClass";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { MdPayment } from "react-icons/md";
import { BiDollar } from "react-icons/bi";

const SelectClass = () => {
  const [allClass, refetch] = useSelectClass();
  const [axiosSecure] = UseAxiosSecure();

  const handleDeleteBtn = (data) => {
    axiosSecure.delete(`/selectClass/delete/${data._id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Select | Class</title>
      </Helmet>
      <h3 className="text-xl font-semibold w-full ml-16">My selected Class</h3>
      <div className="divider w-11/12 ml-8"></div>
      <div className="w-full">
        <div className="overflow-x-auto ml-8">
          <table className="table table-xs">
            <thead className="bg-black text-white">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Expert</th>
                <th>Trainer</th>
                <th>Email</th>
                <th className="flex items-center">
                  price <BiDollar className="text-sm "></BiDollar>
                </th>
                <th>Action</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {allClass?.map((singleClass, index) => (
                <tr key={singleClass._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="avatar mask mask-squircle w-10 h-10"
                      src={singleClass.image}
                      alt=""
                    />
                  </td>
                  <td>{singleClass.category}</td>
                  <td>{singleClass.coachName}</td>
                  <td>{singleClass.coachEmail}</td>
                  <td className="flex items-center mt-3 justify-center">
                    {singleClass.price}
                    <BiDollar className="text-yellow-500"></BiDollar>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteBtn(singleClass)}
                      className="btn btn-sm"
                    >
                      {" "}
                      <FaTrash className="text-red-600"></FaTrash>
                    </button>
                  </td>
                  <td>
                    <Link to="/dashboard/payment" state={singleClass}>
                      <button className="btn btn-sm ">
                        <MdPayment className="text-green-600 w-4 h-5"></MdPayment>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SelectClass;
