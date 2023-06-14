import { useForm } from "react-hook-form";
import { useLocation} from "react-router-dom";
import UseAxiosSecure from "../../../../components/hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const FeedBack = () => {
  const location = useLocation();
  const [axiosSecure] = UseAxiosSecure();
  const singleData = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
   axiosSecure.put(`/feedback/${singleData?._id}`, data)
   .then(res => {
    if (res.data.modifiedCount > 0) {
      reset()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Feedback has been sent",
        showConfirmButton: false,
        timer: 1500,
      });
    }
   })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-xl font-extralight ">
        Feed <span className="text-green-500">Back</span>
      </h3>
      <div className="divider"></div>
      <div className="form-control">
        <textarea
          {...register("feedback", { required: true })}
          className="textarea textarea-bordered h-24 my-4 "
        ></textarea>
        {errors.feedback && <span className="mb-4">Give Your Feedback</span>}
      </div>

      <input
        className="btn bg-orange-600 text-white hover:bg-orange-400 mb-4"
        type="submit"
        value="send"
      />
    </form>
  );
};

export default FeedBack;