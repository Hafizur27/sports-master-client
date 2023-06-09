import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import {  FaUserShield } from 'react-icons/fa';
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.modifiedCount){
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an admin`,
          showConfirmButton: false,
          timer: 1500
        })
      }

    })

  }

 

  return (
    <div>
      <Helmet>
        <title>Manage User</title>
      </Helmet>
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
      {
        users?.map((user, index)=><tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>
       {
        user.role === 'admin'? 'admin': <button onClick={()=> handleMakeAdmin(user)}><FaUserShield></FaUserShield></button>
       }
        </td>
        <td><button className="btn btn-sm">Make Admin</button></td>
        <td><button className="btn btn-sm">Make Instructor</button></td>
      </tr> )
      }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ManageUsers;
