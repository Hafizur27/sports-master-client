import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";

const PopularClass = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: allClass = [] } = useQuery(["popularClass"], async () => {
    const res = await axiosSecure.get("/manageClass");
    return res.data;
  });

  const popularClass = allClass.filter(
    (popular) => popular?.student > popular?.seat
  );
  return (
    <div className="my-6">
      <h3 className="text-4xl font-serif text-center mb-10 ">
        <span className="text-yellow-500"> popular</span> class
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-12">
        {popularClass?.slice(0, 6)?.map((data) => (
          <div key={data?._id} className="card bg-base-100 shadow-xl border-2 border-slate-500">
            <figure className="p-4">
              <img
                src={data?.image}
                alt="Popular class"
                className="rounded-xl"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
