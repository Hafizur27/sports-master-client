import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";
import { GrUpdate } from "react-icons/gr";


const MyClass = () => {
    const [axiosSecure] = UseAxiosSecure();
    const {data : allClass = []} = useQuery(['classes'], async() =>{
        const res = await axiosSecure.get('/allClass');
        return res.data;
    });
    console.log(allClass[0])
    return (
        <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class</th>
                <th>Remaining</th>
                <th>Price</th>
                <th>Status</th>
                <th>Total Students</th>
                <th>Feedback</th>
                <th>Action</th>
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
                  <td className="text-center">{singleClass?.seat} Seat</td>
                  <td className="text-center">{singleClass?.price}</td>
                  <td>{singleClass?.status}</td>
                  <td className="text-center">{singleClass?.student}</td>
                  <td>
                    {singleClass?.feedback}
                  </td>
                  <td>
                    <button className="btn btn-xs bg-orange-500 hover:bg-orange-300"><GrUpdate></GrUpdate></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyClass;