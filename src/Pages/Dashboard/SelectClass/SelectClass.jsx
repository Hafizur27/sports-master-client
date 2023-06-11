import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
import useSelectClass from "../../../components/hooks/useSelectClass";

const SelectClass = () => {
  const [allClass, refetch] = useSelectClass()
  /* const [axiosSecure] = UseAxiosSecure();
  const { data: allClass = [], refetch } = useQuery(
    ["selectClass"],
    async () => {
      const res = await axiosSecure.get("/selectClass");
      return res.data;
    }
  ); */
  
  const total = allClass?.reduce((sum, item)=> sum + item?.price, 0);
  console.log(total)

  return (
    <>
    <h3>Total spend Amount : {total}</h3>
    <Link to='/dashboard/payment'><button className="btn btn-sm">pay now</button></Link>
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Game</th>
            <th>Name</th>
            <th>Email</th>
            <th>price</th>
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
              <td>{singleClass.name}</td>
              <td>{singleClass.email}</td>
              <td>{singleClass.price}</td>
              <td>
                <button className="btn btn-sm">Delete</button>
              </td>
              <td>
                <Link to= 'dashboard/payment'><button className="btn btn-sm">pay</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default SelectClass;
