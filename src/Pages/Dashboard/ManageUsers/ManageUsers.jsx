import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
    <div>
      <Helmet>
        <title>Manage User</title>
      </Helmet>
      <h3>total User: {users?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
              <th>Action</th>
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
                      className="btn btn-sm"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button className="btn btn-sm" disabled>
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                {user?.role !== "instructor" ? 
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-sm"
                    >
                      Make Instructor
                    </button>
                   : 
                    <button className="btn btn-sm" disabled>
                      Make Instructor
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
