import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";


const EnrollClass = () => {
    const [axiosSecure] = UseAxiosSecure();
    const {data: allClass = []} = useQuery(['enroll'], async () =>{
        const res = await axiosSecure.get('/payments');
        return res.data;
    })
   
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>#</th> 
        <th>Coaches</th> 
        <th>Email</th> 
        <th>Games</th> 
        <th>price</th>
      </tr>
    </thead> 
    <tbody>
        {
            allClass?.map((data, index) =>  <tr key={data._id}>
                <td>{index + 1}</td> 
                <td>{data?.coachesName}</td> 
                <td>{data?.coachesEmail}</td> 
                <td>{data?.classesName}</td> 
                <td>{data?.price}</td> 
              </tr>)
        }
     
      
    </tbody> 
    
  </table>
</div>
        </div>
    );
};

export default EnrollClass;