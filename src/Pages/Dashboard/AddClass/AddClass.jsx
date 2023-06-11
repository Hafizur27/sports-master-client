import { useForm } from "react-hook-form";
import UseAuth from "../../../components/UseAuth/UseAuth";
import UseAxiosSecure from "../../../components/hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_image_upload_token;

const AddClass = () => {
    const img_hosting_url= `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const {user} = UseAuth();
    const [axiosSecure] = UseAxiosSecure();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.photoURL[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse?.success){
                const imgUrl = imgResponse?.data?.display_url;
                const { category, price, seat} = data;
                const classItem = {name: user?.displayName, email: user?.email, category, price: parseFloat(price), seat: seat, image: imgUrl, status: 'pending' };
                axiosSecure.post('/addClass', classItem)
                .then(data => {
                    console.log(data.data)
                    if(data?.data?.insertedId){
                      reset();
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
        })
    
      };
  return (
    <div className="w-full ml-14 mt-4 mb-4">
      <h3 className="font-bold text-center text-xl mb-4"> Please Add class</h3>
      <form onSubmit={handleSubmit(onSubmit)} className=" border p-6 shadow-lg rounded-lg bg-slate-200">
       <div className="flex gap-4">
       <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold">Instructor Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            defaultValue={user?.displayName}
            placeholder="Name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold">Instructor email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            defaultValue={user?.email}
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </div>
       </div>
       <div className="flex gap-4 my-4">
       <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold">Sports Class</span>
          </label>
          <select defaultValue='Select one Sports' {...register("category", { required: true })} className="select select-bordered">
            <option disabled>
              Select one Sports
            </option>
            <option>Football</option> 
            <option>Cricket</option>
            <option>volley Ball</option>
            <option>Basket Ball</option>
            <option>Badminton</option>
            <option>Tines</option>
          </select>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold">Available seats</span>
          </label>
          <input
            type="number"
            {...register("seat", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
       
       </div>
       <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold">Sports Image</span>
          </label>
          <input
            type="file"
            {...register("photoURL", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text font-bold">Price</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input type="submit" value="Add Now" className="btn bg-orange-600 text-white hover:bg-orange-400 mb-4" />
      </form>
    </div>
  );
};

export default AddClass;
