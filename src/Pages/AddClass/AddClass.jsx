import { useForm } from "react-hook-form";
import UseAuth from "../../components/UseAuth/UseAuth";
import UseAxiosSecure from "../../components/hooks/UseAxiosSecure";


const img_hosting_token = import.meta.env.VITE_image_upload_token;

const AddClass = () => {
    const img_hosting_url= `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const {user} = UseAuth();
    const [axiosSecure] = UseAxiosSecure();

    const { register, handleSubmit } = useForm();
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
                const classItem = {name: user?.displayName, email: user?.email, category, price: parseFloat(price), seat: parseInt(seat), image: imgUrl};
                axiosSecure.post('/class', classItem)
                .then(data => {
                    console.log(data.data)
                    if(data?.data?.insertedId){
                        alert('class added successfully');
                    }
                })
            }
        })
    
      };
  return (
    <div>
      <h3>class</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="">
       <div className="flex gap-4">
       <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Instructor Name</span>
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
            <span className="label-text">Instructor email</span>
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
            <span className="label-text">Sports Class</span>
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
            <span className="label-text">Sports Image</span>
          </label>
          <input
            type="file"
            {...register("photoURL", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </div>
       </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Available seats</span>
          </label>
          <input
            type="number"
            {...register("seat", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input type="submit" value="Add Class" className="btn bg-orange-600 text-white hover:bg-orange-400 mb-4" />
      </form>
    </div>
  );
};

export default AddClass;
