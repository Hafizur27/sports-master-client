import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const ManageUsers = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://sports-master-server-hafizur27.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`https://sports-master-server-hafizur27.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is a instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>Manage User</title>
      </Helmet>
      <h2 className="text-2xl font-bold m-3">Manage All Users</h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead className="bg-black text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center ">Make Admin</th>
              <th className="text-center">Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  {user?.role !== "admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm bg-orange-500 text-white text-lg hover:bg-orange-700 ml-2"
                    >
                      <MdOutlineAdminPanelSettings></MdOutlineAdminPanelSettings>
                    </button>
                  ) : (
                    <button className="btn text-lg btn-sm ml-2" disabled>
                    <MdOutlineAdminPanelSettings></MdOutlineAdminPanelSettings>
                    </button>
                  )}
                </td>
                <td>
                {user?.role !== "instructor" ? 
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-sm bg-green-500 text-white text-sm hover:bg-green-700 ml-5"
                    >
                      <GiTeacher></GiTeacher>
                    </button>
                   : 
                    <button className="btn text-sm btn-sm ml-5" disabled>
                     <GiTeacher></GiTeacher>
                    </button>
                  }
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
