import { Helmet } from "react-helmet-async";
import UseAuth from "../../components/UseAuth/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import login from '../../assets/login.json';
import SocialLogIn from "../../components/SectionTitle/SocialLogIn/SocialLogIn";

const LogIn = () => {

  const {logIn} = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // console.log(data);
    logIn(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      navigate(from, {replace: true});
    })
    .catch(error => console.log(error))

  };
 

  return (
    <div>
      <Helmet>
        <title>LogIn</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <Lottie animationData={login} loop={true} className="w-2/3 mx-auto" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-4 md:mt-16">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h4 className="font-bold mb-2">Please LogIn</h4>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-orange-600 text-white hover:bg-orange-400" type="submit" value="LogIn" />
              </div>
            </form>
            <p><small className="text-orange-600 ml-6 text-sm">New Here? please <Link to='/signUp' className="font-bold">SignUp</Link></small></p>
            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
