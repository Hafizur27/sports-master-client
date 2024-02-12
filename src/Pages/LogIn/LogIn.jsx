import { Helmet } from "react-helmet-async";
import UseAuth from "../../components/UseAuth/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import login from "../../assets/login.json";
import SocialLogIn from "../../components/SectionTitle/SocialLogIn/SocialLogIn";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logIn } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    logIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Helmet>
        <title>sports | LogIn</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <Lottie animationData={login} loop={true} className="" />
          </div>
          <div className="">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body bg-yellow-100  shadow-2xl p-6 md:mt-16 rounded-2xl border border-black"
            >
              <h4 className="font-bold mb-2">Please LogIn</h4>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="input input-bordered "
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control relative mb-1 ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />

                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
                <a
                  className="absolute top-[84px] right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <BsEyeSlashFill></BsEyeSlashFill>
                  ) : (
                    <BsEyeFill></BsEyeFill>
                  )}
                </a>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-600 text-white hover:bg-orange-400"
                  type="submit"
                  value="LogIn"
                />
              </div>
            </form>

            <p>
              <small className="text-orange-600 ml-6 text-sm">
                New Here? please{" "}
                <Link to="/signUp" className="font-bold">
                  SignUp
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

export default LogIn;
