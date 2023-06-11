import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";

const PaymentHistory = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: history = [] } = useQuery(["history"], async () => {
    const res = await axiosSecure.get("/payments");
    return res.data;
  });
  console.log(history[0]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Total Select</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>

            {
                history?.map((data, index) => <tr key={data._id}>
                    <th>{index + 1}</th>
                    <td>{data?.name}</td>
                    <td >{data?.email}</td>
                    <td className="text-center">{data?.quantity}</td>
                    <td className="text-center">{data?.price}</td>
                   
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
