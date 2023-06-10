import Swal from "sweetalert2";
import UseAuth from "../../components/UseAuth/UseAuth";
import UseAxiosSecure from "../../components/hooks/UseAxiosSecure";


const Class = ({singleClass}) => {
    const [axiosSecure] = UseAxiosSecure();
    const { image, category, name, seat, price, email, _id } = singleClass;
    const {user} = UseAuth();
    console.log(user)
    const handleSelectClass = data =>{
        if(user && user.email){
            const selectedClass = {selectId: _id, category, name: user?.displayName, image, price, seat, email: user?.email };
            axiosSecure.post('/selectClass', selectedClass)
            .then(data =>{
                if(data.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully added',
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
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {category}</h2>
          <p>Instructor: {name}</p>
          <p>Available seats: {seat}</p>
          <p>Price: {price}</p>
          
          <div onClick={()=>handleSelectClass(singleClass)} className="card-actions">
            <button className="btn btn-primary">Select</button>
          </div>
        </div>
      </div>
    );
};

export default Class;