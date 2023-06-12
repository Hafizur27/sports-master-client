import Swal from "sweetalert2";
import UseAuth from "../../components/UseAuth/UseAuth";
import UseAxiosSecure from "../../components/hooks/UseAxiosSecure";


const Class = ({singleClass}) => {
  const [axiosSecure] = UseAxiosSecure();
  const { coachEmail,coachName,coachPhoto,image, category, seat, price, _id, student } = singleClass;
  const {user} = UseAuth();
  // console.log(singleClass)
  console.log(user)
    const handleSelectClass = () =>{
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
              seat,
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
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="class" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {category}</h2>
          <p>Instructor: {coachName}</p>
          <p>Available seats: {seat}</p>
          <p>Price: {price}</p>
          
          <div onClick={handleSelectClass} className="card-actions">
            <button className="btn bg-orange-600 text-white hover:bg-orange-400">Select</button>
          </div>
        </div>
      </div>
    );
};

export default Class;