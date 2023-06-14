import Swal from "sweetalert2";
import UseAuth from "../../components/UseAuth/UseAuth";
import UseAxiosSecure from "../../components/hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";


const Class = ({singleClass}) => {
  const [axiosSecure] = UseAxiosSecure();
  const { coachEmail,coachName,coachPhoto,image, category, seat, price, _id, student } = singleClass;
  const reamingSeat = parseInt(seat)
  const {user} = UseAuth();
  const {data: allUser = []} = useQuery(['users'], async() =>{
    const res = await axiosSecure.get('/users');
    return res.data;
  }) ;
  const loggedInUser = allUser?.filter(data => data?.email === user?.email);
  const {role} = loggedInUser[0] || {};
  
    const handleSelectClass = () =>{

      if(!user?.email){
        toast.error("Please log before selected");
        return
      }

        if(user && user.email){
            const selectedClass = {
              CoachId:_id,
              coachName,
              coachEmail, 
              coachPhoto,
              category,
              StudentName: user?.displayName,
              studentEmail: user?.email,
              studentImage: user?.photoURL,
              image,
              price,
              seat: parseInt(seat),
              student
            };
            axiosSecure.post('/selectClass', selectedClass)
            .then(data =>{
                if(data.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Selected this Class',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    }
    return (
       <>
       <Toaster position="top-right" />
        <div className={reamingSeat === 0 ? 'card bg-red-600 shadow-xl' : 'card bg-base-100 shadow-xl'}>
        <figure className="px-10 pt-10">
          <img src={image} alt="class" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {category}</h2>
          <p>Instructor: {coachName}</p>
          <p>Available seats: {seat}</p>
          <p>Price: {price} $</p>
          
          <div onClick={handleSelectClass} className="card-actions">
            
            {
              reamingSeat === 0 || role === 'admin' || role === 'instructor' ? <button className="btn" disabled>Select
              </button> : <button className="btn bg-orange-600 text-white hover:bg-orange-400">Select</button>
            }
            
          </div>
        </div>
      </div>
       </>
    );
};

export default Class;