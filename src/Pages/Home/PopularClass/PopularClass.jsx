
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";


const PopularClass = () => {
    const [axiosSecure] = UseAxiosSecure();
    const {data: allClass = []} = useQuery(['popularClass'], async () => {
        const res = await axiosSecure.get('/allClass');
        return res.data;
    })
   
    const popularClass = allClass.filter(popular => popular?.student > popular?.seat);
    return (
       <div className="my-6">
       <h3 className="text-3xl text-center">popular class</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-12">
            {
                popularClass?.map(data =><div key={data?._id} className="card bg-base-100 shadow-xl">
                <figure className="p-4">
                  <img src={data?.image} alt="Popular class" className="rounded-xl" />
                </figure>
                
              </div>)
            }
        </div>
       </div>
    );
};

export default PopularClass;