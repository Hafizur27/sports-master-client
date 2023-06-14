import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../components/UseAuth/UseAuth";
import Lottie from "lottie-react";
import login from "../../assets/login.json";
import SocialLogIn from "../../components/SectionTitle/SocialLogIn/SocialLogIn";
import Swal from "sweetalert2";
import { Toaster, toast } from "react-hot-toast";

const img_hosting_token = import.meta.env.VITE_image_upload_token;

const SignUp = () => {
  const { createUser, updateUserProfile } = UseAuth();
  const navigate = useNavigate();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data?.password !== data?.confirm) {
      toast.error("Password and confirm password do not match");
      return;
    }

    createUser(data.email, data.password).then((result) => {
      // eslint-disable-next-line no-unused-vars
      const loggedUser = result.user;
      const formData = new FormData();
      formData.append("image", data.photoURL[0]);

      fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgResponse) => {
          if (imgResponse?.success) {
            const imgUrl = imgResponse?.data?.display_url;

            updateUserProfile(data.name, imgUrl)
              .then(() => {
                const saveUser = {
                  name: data.name,
                  email: data.email,
                  imgUrl,
                  role: "student",
                };

                fetch("https://sports-master-server-hafizur27.vercel.app/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      reset();
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Well Come to Sports Master",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate("/");
                    }
                  });
              })
              .catch((error) => console.log(error));
          }
        });
    });
  };
  return (
    <div>
      <Helmet>
        <title>Sports | SignUp</title>
      </Helmet>
      <Toaster position="top-right" />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={login} loop={true} className="" />
          </div>
          <div className="">
            <form
              className="card-body bg-yellow-100  shadow-2xl p-6 md:mt-16 rounded-2xl border border-black"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h4 className="font-bold mb-2">Please SignUp</h4>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">name is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">password must be six character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    please provide uppercase and special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirm", { required: true })}
                  className="input input-bordered"
                />
                {errors.confirm && (
                  <span className="text-red-500">
                    Please Re-Write your password
                  </span>
                )}
              </div>

              <div className="form-control">
                <input
                  type="file"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                  className=" "
                />
                {errors.photoURL && (
                  <span className="text-red-500">Photo URL is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="SignUp"
                  className="btn bg-orange-600 text-white hover:bg-orange-400"
                />
              </div>
            </form>
            <p>
              <small className="text-orange-600 ml-6 text-sm">
                Already have an account? please{" "}
                <Link to="/logIn" className="font-bold">
                  Login
                </Link>
              </small>
            </p>
            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
