import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: history = [] } = useQuery(["history"], async () => {
    const res = await axiosSecure.get("/payments/short");
    return res.data;
  });
  console.log(history[1]);
  return (
   <>
   <Helmet>
        <title>Payment | History </title>
      </Helmet>
    <h3 className="text-xl font-bold w-full ml-16">Payment History</h3>
    <div className="divider w-11/12 ml-8"></div>
    <div className="w-full">
        <div className="overflow-x-auto m-8">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Transaction Id</th>
              <th>Charge</th>
            </tr>
          </thead>
          <tbody>
            {history?.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>{data?.StudentName}</td>
                <td>{data?.studentEmail}</td>
                <td>{data?.date}</td>
                <td className="text-center">{data?.transactionId}</td>
                <td className="text-center">{data?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </>
  );
};

export default PaymentHistory;
