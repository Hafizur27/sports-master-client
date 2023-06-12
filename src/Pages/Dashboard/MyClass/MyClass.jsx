import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";


const MyClass = () => {
    const [axiosSecure] = UseAxiosSecure();
    const {data : allClass = []} = useQuery(['classes'], async() =>{
        const res = await axiosSecure.get('/allClass');
        return res.data;
    })
    const {data: student = []} = useQuery(['totalStudent'], async () =>{
        const res = await axiosSecure.get('/payments');
        return res.data;
    })
    console.log(student)
    return (
        <div>
            <h3>total number of students: {0 + student?.length}</h3>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Status</th>
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
                  <td>{singleClass?.seat}</td>
                  <td>{singleClass?.price}</td>
                  <td>{singleClass?.status}</td>
                  <td>
                    <button className="btn btn-xs">FeedBack</button>
                  </td>
                  <td>
                    <button className="btn btn-xs">update</button>
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