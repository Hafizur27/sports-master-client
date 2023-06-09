import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../components/UseAuth/UseAuth";
import Lottie from "lottie-react";
import login from '../../assets/login.json';
import SocialLogIn from "../../components/SectionTitle/SocialLogIn/SocialLogIn";

const SignUp = () => {
  const {createUser, updateUserProfile} = UseAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() =>{
        console.log('user profile updated');
        reset();
        // todo alert
        navigate('/')
      })
      .catch(error => console.log(error))
    })
  };
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <Lottie animationData={login} loop={true} className="w-2/3 mx-auto" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  p-4 md:mt-16">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
                    pattern:
                      /(?=.*[!@#$%^&*])(?=.*[A-Z])/
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
                  <p className="text-red-500">please provide uppercase and special character</p>
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
                  <span className="text-red-500">Please Re-Write your password</span>
                )}
              </div>
              
              <div className="form-control">
              
                <input
                  type="file"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                  className="file-input file-input-bordered"
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
                Already have an account? please <Link to="/logIn" className="font-bold">Login</Link>
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
